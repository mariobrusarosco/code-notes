// Vendors and Libs
const webpack = require('webpack')
const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const CleanWebpack = require('clean-webpack-plugin')

// Project's configuration
const config = require('../../../config')

const commonPlugins = env => [
  new HtmlWebpack({
    template: path.resolve('src', 'index.html')
  }),
  new CleanWebpack(['dist'], {
    root: process.cwd()
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component'] // Just an example of providing only some parts of a Library/Module
  }),
  new webpack.EnvironmentPlugin({
    APP: config()
  })
]

module.exports = commonPlugins
