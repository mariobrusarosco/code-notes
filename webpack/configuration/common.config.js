const path = require('path')

const developmentConfig = () => ({
  entry: ['@babel/polyfill', './src/index.js'],
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
    modules: [path.resolve('node_modules'), path.resolve('src')]
  }
})

module.exports = developmentConfig
