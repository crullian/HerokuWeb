var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    './public/index.js'
  ],

  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'app.js',
    publicPath: '/public/dist'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel?stage=0',
        include: path.join(__dirname, 'public') },
      { test: /\.js?$/,
        loader: 'babel?stage=0',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'public/css') },
    ]
  }
}
