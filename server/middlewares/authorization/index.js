const jwt = require('jsonwebtoken')
const session = require('express-session')

// const authorizationByJWT = (req, res, next) => {
//   const givenToken = req.header('x-auth-token')

//   if (!givenToken) {
//     return res
//       .status(401)
//       .send('Access Denined. No provided token')
//   }

//   try {
//     const verifiedToken = jwt.verify(givenToken, process.env.JWT_SECRET)
//     req.verifiedUser = verifiedToken
//     next()
//   }
//   catch (error) {
//     return res.status(401).send('Invalid Token')
//   }

// }

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
