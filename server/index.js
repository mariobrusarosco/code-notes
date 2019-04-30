const PORT = process.env.PORT || 9090
const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')

// App Setitngs
const app = express()
// Logging Async Errors
// require('express-async-errors')


// TO DO - Remove this Erros Map
global.errorsMap = {
  "40": "You must provide an authentication type"
}
// Logging errors in the entire App
const winston = require('winston')
winston.add(new winston.transports.File({ filename: "logfile.log" }));

// DB
const mongoose = require('mongoose')

mongoose.connect(
  process.env.DB_CREDENTIALS || 'mongodb://mariobrusarosco:ma240787@ds121222.mlab.com:21222/dev-code-notes',
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
// app.use(helmet())
app.use(cookieParser());

// Custom Middlewares
const authorization = require('./middlewares/authorization')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  // For Authenticated Cookies
//   res.cookie('username', 'Mario', { expires: new Date(Date.now() + 60000), 
  // res.header("Access-Control-Allow-Credentials", "true");
  next();
});
// --------------  MIDDLEWARES --------------------- //

// ROUTES
const home = require('./routes/home')
const auth = require('./routes/auth')
const users = require('./routes/users')
const me = require('./routes/me')
const notes = require('./routes/notes')
const languages = require('./routes/languages')

// app.use('/', home)
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', users)
app.use('/api/v1/me', authorization, me)
app.use('/api/v1/notes', authorization, notes)
app.use('/api/v1/languages', languages)

// Error Handlers for Routes
// const { routeErrorHandler } = require('./middlewares/routes')
// app.use(routeErrorHandler)

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
