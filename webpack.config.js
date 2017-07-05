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


function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }
    return sources;
}

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
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
        // loader: extractTextPlugin.extract('css-loader!sass-loader!style-loader')
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
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: 'transformed.js'
  },
  // plugins: [HTMLWebpackPluginConfig]
  plugins
};
