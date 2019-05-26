const jwt = require('jsonwebtoken')
const session = require('express-session')

const authorization = (req, res, next) => {
  //   const expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
  console.log('cookie: ', req.cookies.username)

  if (req.cookies.username == 'dasdaasdas') {
    console.log('authorized')
  } else {
    return res.status(401).send('Access Denined.')
  }
  //   session({
  //     name: 'session',
  //     keys: ['key1', 'key2'],
  //     cookie: { secure: true,
  //               httpOnly: true,
  //               // domain: 'example.com',
  //               path: 'foo/bar',
  //               expires: expiryDate
  //             }
  //   })
  console.log('...next')
  next()
}

module.exports = authorization
