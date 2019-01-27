const express = require('express'),
  path = require('path')
;(webpackMiddleWare = require('webpack-dev-middleware')),
  (webpack = require('webpack')),
  (webpackConfig = require('./webpack.config.js')),
  (app = express())

if (process.env.NODE_ENV !== 'production') {
  app.use(webpackMiddleWare(webpack(webpackConfig)))
}

app.listen(3050, () => console.log('Listening'))
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'dist/index.html'))
})
