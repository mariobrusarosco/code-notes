const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const productionPlugins = [
  new MiniCssExtractPlugin({
    filename: "[name]-[hash].css",
    chunkFilename: "[id].css"
  }),
  new OptimizeCSSAssetsPlugin({})
]

module.exports = productionPlugins