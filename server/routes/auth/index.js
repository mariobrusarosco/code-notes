const express = require('express')
const Router = express.Router()
const Joi = require('joi')

// Models
// Models
const User =  require('../../models/User')

// Utils
const { email, password } = require('../../utils/validations')

// Common Function to be realocated
const validateReturningUser = req => {
  const validationOptions = {
    ...email,
    ...password
  }

  return Joi.validate(req.body, validationOptions)
}


Router.post('/', async (req, res) => {
  const { error, givenEmail, givenPassword } = validateReturningUser(req.body)

  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  const returningUser = User.findOne({ })

  // Search for users
  // res.send(email)
  // console.log(req)

  res.send('...')
})

module.exports = Router
