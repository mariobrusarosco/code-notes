import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import BrotliPlugin from 'brotli-webpack-plugin'

const productionPlugins = [
  new MiniCssExtractPlugin({
    filename: '[name]-[contenthash].css',
    chunkFilename: '[id]-[contenthash].css'
  }),
  new OptimizeCSSAssetsPlugin({}),
  new CompressionPlugin({
    exclude: /node_modules/,
    cache: true,
    algorithm: 'gzip'
  }),
  new BrotliPlugin()
]

module.exports = productionPlugins
