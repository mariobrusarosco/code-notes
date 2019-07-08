const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const productionLoaders = [
  {
    test: /\.css$/,
    include: /src/,
    exclude: /node_modules|src\/static/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[local]__[hash:base64:8]'
        }
      }
    ]
  },
  {
    test: /\.css$/,
    include: /static\/|node_modules/,
    exclude: /src/,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
  }
]

module.exports = productionLoaders
