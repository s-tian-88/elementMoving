const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({}),
      new CSSMinimizerPlugin({}),
    ],
  },
});
