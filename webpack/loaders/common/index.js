const commonLoaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  },
  {
    test: /\.(ttf|woff|woff2|eot|otf|svg)$/,
    use: ['file-loader']
  },
  {
    test: /\.(png|gif|jpe?g|svg)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 15000, // Convert images < 8kb to base64 strings
          name: 'images/[name].[ext]'
          // name: 'images/[hash].[ext]'
        }
      }
    ]
  }
]

module.exports = commonLoaders
