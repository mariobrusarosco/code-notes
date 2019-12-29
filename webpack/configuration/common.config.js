const path = require('path')

const developmentConfig = () => ({
  entry: ['@babel/polyfill', './src/index.js'],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
    modules: [path.resolve('node_modules'), path.resolve('src'), path.resolve('routes')]
  }
})

module.exports = developmentConfig
