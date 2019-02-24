const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const productionPlugins = [
  new MiniCssExtractPlugin({
    filename: "[name]-[contenthash].css",
    chunkFilename: "[id]-[contenthash].css",
  }),
  new OptimizeCSSAssetsPlugin({}),
]

module.exports = productionPlugins
