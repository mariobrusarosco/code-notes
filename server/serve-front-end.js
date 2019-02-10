const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.static('dist'))

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serving Front End project at ${PORT}`)
})