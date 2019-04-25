const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const productionLoaders = [
	{
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          // modules: true,
          // localIdentName: '[name]__[hash:base64:8]',
        }
      },
      'sass-loader',
    ]
  }
]

module.exports = productionLoaders
