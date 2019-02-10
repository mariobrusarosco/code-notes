const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`Serving Front End project at ${PORT}`)
})
