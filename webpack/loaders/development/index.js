const developmentLoaders = [
  {
    test: /\.css$/,
    include: /src/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
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
    use: ['style-loader', 'css-loader']
  }
]

module.exports = developmentLoaders
