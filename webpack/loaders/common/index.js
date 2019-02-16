const commonLoaders = [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: 'babel-loader'
	},
  {
    test: /\.(ttf|woff|woff2|oet|otf)$/,
    use: [
      'file-loader'
    ]
  },
  {
    test: /\.(png|gif|jpe?g)$/,
    use: [
      'file-loader'
    ]
  },
]

module.exports = commonLoaders
