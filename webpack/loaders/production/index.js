const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const productionLoaders = [
  {
    test: /\.s?css$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          // modules: true,
          // localIdentName: '[name]__[hash:base64:8]',
        }
      },
      {
        loader: 'sass-loader',
        options: {
          data: `
            @import 'variables';
            @import 'reset';
          `,
          includePaths: ['./src/styles']
        }
      }
    ]
  }
]

module.exports = productionLoaders
