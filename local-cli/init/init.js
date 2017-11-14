/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

const {
  listTemplatesAndExit,
  createProjectFromTemplate,
} = require('../generator/templates');
const execSync = require('child_process').execSync;
const fs = require('fs');
const minimist = require('minimist');
const path = require('path');
const printRunInstructions = require('../generator/printRunInstructions');
const process = require('process');
const yarn = require('../util/yarn');

/**
 * Creates the template for a React Native project given the provided
 * parameters:
 * @param projectDir Templates will be copied here.
 * @param argsOrName Project name or full list of custom arguments
 *                   for the generator.
 * @param options Command line options passed from the react-native-cli directly.
 *                E.g. `{ version: '0.43.0', template: 'navigation' }`
 */
function init(projectDir, argsOrName) {
  const args = Array.isArray(argsOrName)
    ? argsOrName // argsOrName was e.g. ['AwesomeApp', '--verbose']
    : [argsOrName].concat(process.argv.slice(4)); // argsOrName was e.g. 'AwesomeApp'

  // args array is e.g. ['AwesomeApp', '--verbose', '--template', 'navigation']
  if (!args || args.length === 0) {
    console.error('react-native init requires a project name.');
    return;
  }

  const newProjectName = args[0];
  const options = minimist(args);

  if (listTemplatesAndExit(newProjectName, options)) {
    // Just listing templates using 'react-native init --template'
    // Not creating a new app.
    return;
  } else {
    console.log('Setting up new React Native app in ' + projectDir);
    generateProject(projectDir, newProjectName, options);
  }
}

/**
 * Generates a new React Native project based on the template.
 * @param Absolute path at which the project folder should be created.
 * @param options Command line arguments parsed by minimist.
 */
function generateProject(destinationRoot, newProjectName, options) {
  var reactNativePackageJson = require('../../package.json');
  var { peerDependencies } = reactNativePackageJson;
  if (!peerDependencies) {
    console.error('Missing React peer dependency in React Native\'s package.json. Aborting.');
    return;
  }

  var reactVersion = peerDependencies.react;
  if (!reactVersion) {
    console.error('Missing React peer dependency in React Native\'s package.json. Aborting.');
    return;
  }

  const yarnVersion =
    (!options.npm) &&
    yarn.getYarnVersionIfAvailable() &&
    yarn.isGlobalCliUsingYarn(destinationRoot);

  createProjectFromTemplate(destinationRoot, newProjectName, options.template, yarnVersion);

  if (yarnVersion) {
    console.log('Adding React...');
    execSync(`yarn add react@${reactVersion}`, {stdio: 'inherit'});
  } else {
    console.log('Installing React...');
    execSync(`npm install react@${reactVersion} --save --save-exact`, {stdio: 'inherit'});
  }
  // 安装web相关依赖
  const webDeps = (
    'babel-core@6.16.0 babel-loader@6.2.5 babel-polyfill@6.16.0 babel-preset-stage-1@6.16.0 ' +
    'haste-resolver-webpack-plugin@0.1.2 json-loader@0.5.2 react-dom@16.0.0-alpha.6 react-hot-loader@1.2.7 '+
    'webpack@1.12.10 webpack-dev-server@1.14.0 webpack-html-plugin@0.1.1'
  );
  if (yarnVersion) {
    console.log('Adding web...');
    execSync(`yarn add ${webDeps} --dev --exact`, {stdio: 'inherit'});
    execSync(`yarn add https://github.com/lishoulong/react-web.git --save --save-exact`, {stdio: 'inherit'});
  } else {
    console.log('Installing web...');
    execSync(`npm install ${webDeps} --dev --exact`, {stdio: 'inherit'});
    execSync(`npm install https://github.com/lishoulong/react-web.git --save --save-exact`, {stdio: 'inherit'});
  }
  if (!options['skip-jest']) {
    const jestDeps = (
      `jest babel-jest babel-preset-react-native react-test-renderer@${reactVersion}`
    );
    if (yarnVersion) {
      console.log('Adding Jest...');
      execSync(`yarn add ${jestDeps} --dev --exact`, {stdio: 'inherit'});
    } else {
      console.log('Installing Jest...');
      execSync(`npm install ${jestDeps} --save-dev --save-exact`, {stdio: 'inherit'});
    }
    addJestToPackageJson(destinationRoot);
  }
  printRunInstructions(destinationRoot, newProjectName);
}

/**
 * Add Jest-related stuff to package.json, which was created by the react-native-cli.
 */
function addJestToPackageJson(destinationRoot) {
  var packageJSONPath = path.join(destinationRoot, 'package.json');
  var packageJSON = JSON.parse(fs.readFileSync(packageJSONPath));

  packageJSON.scripts.test = 'jest';
  packageJSON.jest = {
    preset: 'react-native'
  };
  fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, '\t'));
}

module.exports = init;
