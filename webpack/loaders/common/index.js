const path = require('path')

const commonLoaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    include: path.resolve('src'),
    use: 'babel-loader'
  },
  {
    test: /\.(ttf|woff|woff2|oet|otf)$/,
    include: path.resolve('src', 'assets', 'fonts'),
    use: ['file-loader']
  },
  {
    test: /\.(png|gif|jpe?g)$/,
    include: path.resolve('src'),
    use: ['file-loader']
  }
]

module.exports = commonLoaders
