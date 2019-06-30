const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const productionLoaders = [
  {
    test: /\.scss$/,
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
      },
      {
        loader: 'sass-loader',
        options: {
          data: `
            @import 'variables';
          `,
          includePaths: ['./src/styles']
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
