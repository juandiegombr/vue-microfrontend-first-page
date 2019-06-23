const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
  configureWebpack: {
    externals: {
      vue: 'Vue'
    },
    plugins: [
      new WebpackAssetsManifest({
        output: 'asset-manifest.json'
      })
    ]
  }
}