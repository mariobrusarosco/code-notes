const path = require('path')

module.exports = () => ({
  entry: [
  '@babel/polyfill',
  './src/index.js'
  ],
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules')
    ]
  }
})
