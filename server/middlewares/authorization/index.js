const jwt = require('jsonwebtoken')
const session = require('express-session')

// Project's Config
const { errorsMap, USER_COOKIE_NAME, AUTHORIZATION_COOKIE_NAME } = require('../../config')

const authorization = (req, res, next) => {
  // console.log('cookie: ', req.cookies[AUTHORIZATION_COOKIE_NAME])

  // Access denied if no AUTHORIZATION_COOKIE_NAME exists
  const token = req.cookies[AUTHORIZATION_COOKIE_NAME]

  if (!token) {
    return res.send(403, {
      name: 'NoProvidedToken',
      message: errorsMap['B01']
    })
  }

  // Decoding JWT stored in the 'AUTHORIZATION_COOKIE'
  let decode = null

  try {
    decode = jwt.verify(token, process.env.AUTHORIZATION_SECRET)
  } catch (error) {
    const { name, message } = error

    // If the JWT couldn't be varified... remove the cookie that stores the JWT
    if (name === 'TokenExpiredError') {
      return res
        .clearCookie(AUTHORIZATION_COOKIE_NAME)
        .clearCookie(USER_COOKIE_NAME)
        .send(403, { name, message })
    }

    // console.log('JWT Errror', error)
    // return res.send(403,'Verification error')
  }

  console.log(decode)
  // return res.send('authorization in progress')

  // if (req.cookies.username == 'dasdaasdas') {
  //   console.log('authorized')
  // } else {
  //   return res.status(401).send('Access Denined.')
  // }
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
