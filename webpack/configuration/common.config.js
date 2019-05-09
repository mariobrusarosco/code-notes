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
    //   "boilerplate-features": path.resolve('src','boilerplate-features')
    // },
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
      path.resolve('src', 'boilerplate-features')
    ]
  }
})

module.exports = developmentConfig
