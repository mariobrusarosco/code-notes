const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const path = require('path')
const assetsCompression = require('express-static-gzip')

app.use(
  assetsCompression('dist', {
    enableBrotli: true,
    orderPreference: ['br']
  })
)
app.use(express.static('dist'))

// If the server does not recognize a route... it's gonna serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`server listening at ${PORT}`)
})
