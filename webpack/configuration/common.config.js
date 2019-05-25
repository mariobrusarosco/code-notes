const path = require('path')

const developmentConfig = () => ({
  // entry: [
  //   '@babel/polyfill',
  //   './src/index.js'
  // ],
  // In case of multiple entry points
  entry: {
    main: ['@babel/polyfill', './src/index.js'],
    second: './src/index-second.js'
  },
  resolve: {
    // alias: {
    //   "imagesPath": path.resolve('src','assets','images')
    // },
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
      path.resolve('src', 'boilerplate-features')
    ]
  }
})

module.exports = developmentConfig
