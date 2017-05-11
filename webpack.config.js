var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client');
var ENTRY_PATH = path.resolve(APP_DIR, 'app', 'app.jsx');

var config = {
  entry: ENTRY_PATH,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
              test: /\.jsx?/,
              include: APP_DIR,
              loader: 'babel'
          }
      ]
  }
};

module.exports = config;