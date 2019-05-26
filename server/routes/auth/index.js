// Vendors and Libs
const express = require('express')
const Router = express.Router()
const Joi = require('joi')
const bycrpt = require('bcrypt')

// Project's Config
const { errorsMap } = require('../../config')

// MIddlewares
const { routeMiddleware } = require('../../middlewares/routes')

// Utils
const { userPublicData } = require('../../utils/User')
const { email, password } = require('../../utils/validations')

// Models
const User = require('../../models/User')

// Common Function to be realocated
const validateReturningUser = reqBody => {
  const validationOptions = {
    ...email,
    ...password
  }

  return Joi.validate(reqBody, validationOptions)
}

Router.post(
  '/',
  routeMiddleware(async (req, res, next) => {
    const { error } = validateReturningUser(req.body)

    if (error) {
      return res.status(400).send(error.details[0].message)
    }

    const { email, password } = req.body

    /*
     * Exisitng User Verification
     */
    const returningUser = await User.findOne({ email })

    if (!returningUser) {
      return res.status(400).send(errorsMap['A06'])
    }

    /*
     * Password Verification
     */
    const returningUserPassword = await bycrpt.compare(password, returningUser.password)

    if (!returningUserPassword) {
      return res.status(400).send(errorsMap['A06'])
    }

    /*
     * Authorization Process
     */
    const AuthorizationToken = returningUser.generateAuthorizationToken()

    res.cookie('PA', AuthorizationToken, {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      // secure: true,
      httpOnly: true
    })

    /*
     * User Identification Process
     */
    const userToken = returningUser.generateUserIdToken()

    res.cookie('P_USER', userToken, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
    })
    // res.header('UID', token)
    // res.header('Access-Control-Expose-Headers', 'UID')

    res.send(userPublicData(returningUser))
  })
)

module.exports = Router
