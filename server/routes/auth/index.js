const express = require('express')
const Router = express.Router()
const Joi = require('joi')
const bycrpt = require('bcrypt')

// Utils
const generateJWT = require('../../utils/generateJWT')
// Models
// Models
const User =  require('../../models/User')

// Utils
const { email, password } = require('../../utils/validations')

// Common Function to be realocated
const validateReturningUser = reqBody => {
  const validationOptions = {
    ...email,
    ...password
  }

  return Joi.validate(reqBody, validationOptions)
}


Router.post('/', async (req, res) => {
  const { error } = validateReturningUser(req.body)

  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  const { email, password } = req.body

  const returningUser = await User.findOne({ email })
  if (!returningUser) {
    return res.status(400).send('Invalid email or password')
  }

  const returningUserPassword = await bycrpt.compare(password,returningUser.password)
  if (!returningUserPassword) {
    return res.status(400).send('Invalid email or password')
  }

  const token = generateJWT({ email: returningUser.email })

  res.send(token)
})

module.exports = Router
