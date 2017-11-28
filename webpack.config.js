var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
  new HTMLWebpackPlugin( {
    template: './app/index.html',
    filename: 'index.html',
    inject: 'body'
  }),
  new extractTextPlugin({
    filename: 'build/style/style.css',
    allChunks: true
  })
];

module.exports = {
  entry: __dirname + '/app/index.js',

  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader'], // <-- changed line
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      }
    ]
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'transformed.js'
  },
  plugins
};
