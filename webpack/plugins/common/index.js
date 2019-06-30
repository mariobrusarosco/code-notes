// Vendors and Libs
const webpack = require('webpack')
const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const CleanWebpack = require('clean-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { InjectManifest } = require('workbox-webpack-plugin')

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
  }),
  new WebpackPwaManifest({
    name: 'React Boilerplate',
    start_url: 'index.html?origin=pwa',
    display: 'standalone',
    short_name: 'ReactBoilerplate',
    inject: true,
    description: 'A Front End React Boilerplate!',
    background_color: '#ff6347',
    theme_color: '#045a65',
    crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
    icons: [
      {
        src: path.resolve('src/assets/icon.png'),
        sizes: [72, 96, 128, 144, 152, 192, 384, 512] // multiple sizes
      }
    ]
  }),
  new InjectManifest({
    swSrc: './src/sw.js',
    swDest: 'sw.js'
    // exlcude: /\.(js|html)$/ig
  })
]

module.exports = commonPlugins
