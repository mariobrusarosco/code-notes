// Vendors and Libs
import webpack from 'webpack'
import { resolve } from 'path'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import HtmlWebpack from 'html-webpack-plugin'
import CleanWebpack from 'clean-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import WebpackPwaManifest from 'webpack-pwa-manifest'
import { InjectManifest } from 'workbox-webpack-plugin'
const OfflinePlugin = require('offline-plugin')

// Project's configuration
import config from '../../../src/app-configuration.json'

const commonPlugins = () => [
  new HtmlWebpack({
    template: resolve('src', 'index.html'),
    favicon: resolve('src/assets/images/icon.png')
  }),
  new FaviconsWebpackPlugin({
    mode: 'webapp', // optional can be 'webapp' or 'light' - 'webapp' by default
    devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default
    logo: resolve('src/assets/images/icon.png'),
    cache: true,
    inject: true,
    favicons: {
      appName: 'Boilerplate',
      appShortName: 'Front End Boilerplate',
      appDescription: 'A Boilerplate for Front End Development - Mario Brusarosco',
      start_url: '/index.html?origin=pwa',
      scope: '/',
      display: 'standalone',
      orientation: 'any', // 'landscape' or 'portrait' doesn't allow switch rotation... also 'portrait-primary' doesn't allow 180deg switch orientation
      theme_color: '#00ac95',
      background: '#c8d419',
      appleStatusBarStyle: '#00ac95',
      dir: 'auto',
      lang: 'pt-BR',
      crossorigin: null,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        favicons: true
      }
    }
  }),
  new CleanWebpack(['dist'], {
    root: process.cwd()
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component']
  }),
  new webpack.DefinePlugin({
    APP: JSON.stringify(config)
  }),
  // new OfflinePlugin(),
  // new InjectManifest({
  //   swSrc: './src/sw.js',
  //   swDest: 'sw.js',
  //   exclude: [
  //     /\.map$/,
  //     /.*(manifest|hot).*/,
  //     /\.webapp$/,
  //     /\.xml$/,
  //     /\.*(apple|android|icon|mstile|yandex|coast).*/
  //   ]
  //   // Insert 'included' files with globbing pattern
  // }),
  new StyleLintPlugin()
]

module.exports = commonPlugins
