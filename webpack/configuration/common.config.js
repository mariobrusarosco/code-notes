const path = require('path')

const commonConfig = () => ({
  entry: ['@babel/polyfill', './src/index.js'],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    modules: [
      path.resolve('node_modules'),
      path.resolve('src'),
      path.resolve('src', 'boilerplate-features')
    ]
  }
})

module.exports = commonConfig
