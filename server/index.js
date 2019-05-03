const PORT = process.env.PORT || 9090
const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const session = require('express-session')


// App Setitngs
const app = express()


// TO DO - Remove this Erros Map
global.errorsMap = {
  "40": "You must provide an authentication type"
}

// --------------  ERRORS LOGGER --------------------- //
// Logging Async Errors
// require('express-async-errors')
// Logging errors in the entire App
// const winston = require('winston')
// winston.add(new winston.transports.File({ filename: "logfile.log" }));
// --------------  ERRORS LOGGER --------------------- //

// --------------  DB --------------------- //--
const mongoose = require('mongoose')

mongoose.connect(
  process.env.DB_CREDENTIALS,
  { useNewUrlParser: true }
)
.then(() => {
  console.log('Connected to a mongo DB')
})
.catch(error => {
  new Error({ type: 'Mongo connection error', message: error })
})
// --------------  DB --------------------- //



// --------------  MIDDLEWARES --------------------- //
// Built In Middlewares
app.use(express.json())

// Third Party Middlewares
const helmet = require('helmet')
const morgan = require('morgan')

app.use(morgan('tiny'))
app.use(helmet())
app.use(cookieParser());

// Custom Middlewares
const authorization = require('./middlewares/authorization')

app.use(function(req, res, next) {
  console.log(req.cookies)

  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods','*');

  // // For Authenticated Cookies
  res.cookie('username', '9', {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    secure: true,
    httpOnly: true
  })

  next()
});

const expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour

// app.use(session({
//   key: 'user_sid',
//   secret: 'somerandonstuffs',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//       expires: 600000
//   }
// }))


app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie('user_sid');
  }
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
app.use('/api/v1/me', me)
app.use('/api/v1/notes', notes)
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
