const PORT = process.env.PORT || 8080
const express = require('express')
const path = require('path')
const app = express()
// ;(webpackMiddleWare = require('webpack-dev-middleware')),
//   (webpack = require('webpack')),
//   (webpackConfig = require('./webpack.config.js')),
//   (app = express())

// if (process.env.NODE_ENV !== 'production') {
//   app.use(webpackMiddleWare(webpack(webpackConfig)))
// }

app.listen(PORT, () => console.log('Listening'))

app.get('/', (req, res) => {
  return res.send('Serving Code Notes')
})
