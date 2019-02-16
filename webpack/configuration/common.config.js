const path = require('path')

module.exports = () => ({
  // entry: [
  // '@babel/polyfill',
  // './src/index.js'
  // ]
  // In case of multiple entry points
  entry: {
    main: ['@babel/polyfill', './src/index.js']
  },
  resolve: {
    // alias: {
    // 	"boilerplate-features": path.resolve('src','boilerplate-features')
    // },
    modules: [path.resolve('src'), path.resolve('node_modules')]
  }
})
