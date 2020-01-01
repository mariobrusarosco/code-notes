import path from 'path'
// Loaders
import commonLoaders from '../loaders/common'
import developmenLoaders from '../loaders/development'

// Plugins
import commonPlugins from '../plugins/common'
import developmentPlugins from '../plugins/development'

// Webpacks's Configurations
import commonConfig from './common.config.babel'

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
    hot: true,
    historyApiFallback: true
  },
  plugins: [...commonPlugins(env), ...developmentPlugins],
  module: {
    rules: [...commonLoaders, ...developmenLoaders]
  }
})

// Merging Common and Development configurations
export default Object.assign(commonConfig(), developmentConfig())
