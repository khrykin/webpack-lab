const { merge } = require('webpack-merge');

const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: './docs',
  },
  output: {
    filename: '[name].js',
  }
});
