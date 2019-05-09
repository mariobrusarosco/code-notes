const path = require('path')
const webpack = require('webpack')
const HtmlWebpack = require('html-webpack-plugin')
const CleanWebpack = require('clean-webpack-plugin')
// Loaders
const commonLoaders = require('../loaders/common')
const developmenLoaders = require('../loaders/development')

// Plugins
const commonPlugins = require('../plugins/common')
const developmentPlugins = require('../plugins/development')

// Webpacks's Configurations
const commonConfig = require('./common.config')

const developmentConfig = env => ({
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].development.bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    hot: true
  },
  plugins: [...commonPlugins(env), ...developmentPlugins],
  module: {
    rules: [...commonLoaders, ...developmenLoaders]
  }
})

// Merging Common and Development configurations
module.exports = Object.assign(commonConfig(), developmentConfig())
