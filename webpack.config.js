var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './public/index.js'
  ],

  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'app.js',
    publicPath: '/public/dist'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx$/,
        loader: 'react-hot!babel?stage=0',
        include: path.join(__dirname, 'public') },
      { test: /\.js$/,
        loader: 'babel?stage=0',
        include: path.join(__dirname, 'public') },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'public/css') },
      { test: /\.css$/,
        loader: 'style!css' }
    ]
  }
}
