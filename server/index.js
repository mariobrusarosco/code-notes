const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const PORT = 8080

const app = express()
// const config = require('../webpack/webpack.prod.config')
// const compiler = webpack(config)

app.use(express.static('../dist'))

app.listen(PORT,  () => {
    console.log('server listening at 8080')
})