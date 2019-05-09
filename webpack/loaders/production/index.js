const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const productionLoaders = [
	{
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          // modules: true, 
          // localIdentName: '[name]__[hash:base64:8]', 
          }
      },
    ]
  }
]

module.exports = productionLoaders