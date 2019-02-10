const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const assetsCompression = require('express-static-gzip')

app.use(assetsCompression('dist', {
	enableBrotli: true,
	orderPreference: ['br']
}))
app.use(express.static('dist'))

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Boilerplate: ${process.env.TEST_ENV_VAR}`)
  console.log(`server listening at ${PORT}`)
})
