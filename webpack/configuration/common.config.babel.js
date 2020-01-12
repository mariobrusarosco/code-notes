import path from 'path'

const commonConfig = () => ({
  entry: ['@babel/polyfill', './src/index.js'],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      configPath: path.resolve('config')
    },
    modules: [path.resolve('node_modules'), path.resolve('src')],
    extensions: ['.js', '.ts', '.tsx', '.jsx']
  }
})

export default commonConfig
