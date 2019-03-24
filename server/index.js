const PORT = process.env.PORT || 9090
const express = require('express')
const path = require('path')

// App Setitngs
const app = express()
// Logging Async Errors
// require('express-async-errors')

// Logging errors in the entire App
// const winston = require('winston')
// winston.add(new winston.transports.File({ filename: "logfile.log" }));

// DB
const mongoose = require('mongoose')

// mongoose.connect(
//   process.env.DB_CREDENTIALS || 'mongodb://admin:ma240787@ds121222.mlab.com:21222/dev-code-notes',
//   { useNewUrlParser: true }
// )
// .then(() => {
//   console.log('Connected to a mongo DB')
// })
// .catch(error => {
//   new Error({ type: 'Mongo connection error', message: error })
// })


// --------------  MIDDLEWARES --------------------- //
// Built In Middlewares
app.use(express.json())

// Third Party Middlewares
const helmet = require('helmet')
const morgan = require('morgan')
app.use(morgan('tiny'))

// Custom Middlewares

// --------------  MIDDLEWARES --------------------- //

// ROUTES
const home = require('./routes/home')
const auth = require('./routes/auth')
const users = require('./routes/users')
const me = require('./routes/me')
const notes = require('./routes/notes')
const languages = require('./routes/languages')

// app.use('/', home)
app.use('/api/v1/auth',auth)
app.use('/api/v1/users', users)
app.use('/api/v1/me', me)
app.use('/api/v1/notes', notes)
app.use('/api/v1/languages', languages)

// Error Handlers for Routes
const { routeErrorHandler } = require('./middlewares/routes')
app.use(routeErrorHandler)

if (process.env.NODE_ENV === 'production') {
  // Serving assets like main.css or main.js
  // If this condition fits...code ends here!!
  app.use(express.static('dist'))

  // If the server does not recognize a route... it's gonna serve index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist', 'index.html'))
  })
}

// Listener
app.listen(PORT, () => console.log(`Serving Code Notes at ${PORT}`))
