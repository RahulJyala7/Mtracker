// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, 'wwwroot/dist');

module.exports = {
  devtool: 'source-map',
  // devtool: 'inline-source-map',
  context: __dirname,

  entry: {
    "polyfill" : "babel-polyfill",
    "main" : './components/index'
  },

  output: {
     path: BUILD_DIR,
            filename: '[name].js',
            publicPath: '/'
  },

  plugins: [
    new CleanWebpackPlugin([BUILD_DIR]),
    //new UglifyJSPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, include: /components/, exclude: /node_modules/, loaders: ['babel-loader'] }
    ]
  }
};

