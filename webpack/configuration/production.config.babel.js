import path from 'path'

// Loaders
import commonLoaders from '../loaders/common'
import productionLoaders from '../loaders/production'

// Plugins
import commonPlugins from '../plugins/common'
import productionPlugins from '../plugins/production'

// Webpacks's Configurations
import commonConfig from './common.config.babel'

const productionConfig = env => ({
  mode: 'production',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].chunk.js',
    path: path.resolve(__dirname, '../../dist'),
    publicPath: '/'
  },
  optimization: {
    // runtimeChunk: 'single', // @TODO Check the purpose of these option
    splitChunks: {
      // chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [...commonPlugins(env), ...productionPlugins],
  module: {
    rules: [...commonLoaders, ...productionLoaders]
  }
})

// Merging Common and Production configurations
module.exports = Object.assign(commonConfig(), productionConfig())
