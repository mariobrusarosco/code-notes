const webpack = require('webpack')
const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const CleanWebpack = require('clean-webpack-plugin')

const commonPlugins = [
  new HtmlWebpack({
    template: path.resolve('src', 'index.html')
  }),
  new CleanWebpack(['dist'], {
    root: process.cwd()
  }),
  new webpack.ProvidePlugin({
    React: 'react'
    // Component: ['react', 'Component'] // Just an example of providing only some parts of a Library/Module
  })
]

module.exports = commonPlugins
