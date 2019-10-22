const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')
const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.dist,
    overlay: true
  },
  devtool:'cheap-eval-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})