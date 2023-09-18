const webpack = require('webpack')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].js',
  },
  devServer: {
    contentBase: '.',
  },
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}

module.exports = config
