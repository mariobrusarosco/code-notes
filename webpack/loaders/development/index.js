const developmentLoaders = [
  {
    test: /\.scss$/,
    use: [
      'style-loader',
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

module.exports = developmentLoaders
