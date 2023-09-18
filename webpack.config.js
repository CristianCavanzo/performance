const path = require('path')

const config = {
  mode: 'production',
  entry: './src/index.js',
  clean: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].js',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
  },
}

module.exports = config
