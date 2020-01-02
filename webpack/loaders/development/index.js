const developmentLoaders = [
  {
    test: /\.s?css$/,
    include: /src/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: true,
          localIdentName: '[folder]__[local]'
        }
      },
      {
        loader: 'sass-loader',
        options: {
          data: `
            @import 'variables';
            @import 'mixins';
            @import 'animations';
          `,
          includePaths: ['./src/styles']
        }
      }
    ]
  },
  {
    test: /\.css$/,
    include: /node_modules/,
    exclude: /src/,
    use: ['style-loader', 'css-loader']
  }
]

module.exports = developmentLoaders
