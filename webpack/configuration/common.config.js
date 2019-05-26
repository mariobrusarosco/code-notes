const path = require('path')

const developmentConfig = () => ({
  entry: {
    main: ['@babel/polyfill', './src/index.js']
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
