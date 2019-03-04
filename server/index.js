const PORT = process.env.PORT || 9090
const express = require('express')
const path = require('path')

// App Setitngs
const app = express()

// DB
const mongoose = require('mongoose')
mongoose.connect(
  process.env.DB_CREDENTIALS || 'mongodb://admin:ma240787@ds121222.mlab.com:21222/dev-code-notes',
  { useNewUrlParser: true }
)
.then(() => {
  console.log('Connected to a mongo DB')
})
.catch(error => {
  new Error({ type: 'Mongo connection error', message: error })
})


// --------------  MIDDLEWARES --------------------- //
// Built In Middlewares
app.use(express.json())

// Third Party Middlewares
const helmet = require('helmet')
const morgan = require('morgan')
app.use(morgan('tiny'))
// --------------  MIDDLEWARES --------------------- //

// ROUTES
const home = require('./routes/home')
const users = require('./routes/users')
const notes = require('./routes/notes')
const languages = require('./routes/languages')

app.use('/', home)
app.use('/api/v1/users', users)
app.use('/api/v1/notes', notes)
app.use('/api/v1/languages', languages)



// Listener
app.listen(PORT, () => console.log(`Serving Code Notes at ${PORT}`))
