const PORT = process.env.PORT || 9090
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

// MOCK DATA
const mock = {
  users: [
    {
      id: 1,
      name: 'Mario'
    },
    {
      id: 2,
      name: 'Brusarosco'
    }
  ]
}

// USERS
app.get('/api/v1/users/:id', (req, res) => {
  const user = mock.users.find(user => {
    user.id === parseInt(req.params.id)
  })

  if (!user) {
    return res.status(404).send('Invalid User Id')
  }

  return send(user)
})

app.listen(PORT, () => console.log(`Serving Code Notes at: ${PORT}`))

app.get('/', (req, res) => {
  return res.send(`Serving Code Notes at: ${PORT}`)
})
