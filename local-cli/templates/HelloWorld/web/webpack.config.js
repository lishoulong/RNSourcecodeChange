'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('webpack-html-plugin');
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var NODE_ENV = process.env.NODE_ENV;
var ROOT_PATH = path.resolve(__dirname, '..');
var PROD = 'production';
var DEV = 'development';
let isProd = NODE_ENV === 'production';
let IP = 'localhost';
let PORT = 3003;

var config = {
  paths: {
    src: path.join(ROOT_PATH, '.'),
    index: path.join(ROOT_PATH, 'index.web'),
  },
};

module.exports = {
  devtool: 'source-map',
  node: {
      fs: "empty",
      net: "empty",
      tls: "empty",
      child_process: "empty",
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: ['.web.js', '.js'],
  },
  entry: isProd? [
    config.paths.index
  ]: [
    'webpack-dev-server/client?http://' + IP + ':' + PORT,
    'webpack/hot/only-dev-server',
    config.paths.index,
  ],
  output: {
    path: path.join(__dirname, 'output'),
    filename: 'bundle.js'
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   openAnalyzer: false
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(isProd? PROD: DEV),
      }
    }),
    isProd? new webpack.ProvidePlugin({
      React: "react"
    }): new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlPlugin({
      title: 'use plugin',
      filename: 'index.html'
    }),
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          // This aliases 'react-native' to 'react-native-web' and includes only
          // the modules needed by the app
          plugins: ['react-native-web/babel'],
          // The 'react-native' preset is recommended (or use your own .babelrc)
          presets: ['react-native']
        }
      }
    } ],
    // Disable handling of unknown requires
    unknownContextRegExp: /$^/,
    unknownContextCritical: false,

    // Disable handling of requires with a single expression
    exprContextRegExp: /$^/,
    exprContextCritical: false,

    // Warn for every expression in require
    wrappedContextCritical: true
  }
};
