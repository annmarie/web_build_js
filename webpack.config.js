const webpack = require('webpack')
const path = require('path')
const conf = require('./src/config')
const mode = (conf.isDev) ? 'development' : 'production'

module.exports = {
  mode: mode,
  devServer: {
    contentBase: path.join(__dirname, 'src/browser'),
    headers: { "Access-Control-Allow-Origin": "*" },
    hotOnly: true,
    port: conf.liveJsPort,
  },
  entry: [
    'react-hot-loader/patch',
    './src/browser/App.js',
  ],
  output: {
    publicPath: `${conf.liveJsPath}/`,
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [ "react-hot-loader/babel" ],
          presets: [
            "@babel/react",
            ["@babel/env", { "modules": false }]
          ],
        },
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'source-map',
}
