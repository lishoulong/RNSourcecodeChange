'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
let IP = 'localhost';
let PORT = 3003;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
}).listen(PORT, IP, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at ' + IP + ':' + PORT);
});