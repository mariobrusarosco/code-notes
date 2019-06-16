const developmentLoaders = [
  {
    test: /\.s?css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]__[hash:base64:8]'
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

module.exports = developmentLoaders
