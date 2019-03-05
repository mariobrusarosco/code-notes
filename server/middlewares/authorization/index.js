const jwt = require('jsonwebtoken')

const authorization = (req, res, next) => {
  const givenToken = req.header('x-auth-token')

  if (!givenToken) {
    return res
      .status(401)
      .send('Access Denined. No provided token')
  }

  try {
    const verifiedToken = jwt.verify(givenToken, process.env.JWT_SECRET)
    req.verifiedUser = verifiedToken
    next()
  }
  catch (error) {
    return res.status(401).send('Invalid Token')
  }

}

module.exports = authorization
