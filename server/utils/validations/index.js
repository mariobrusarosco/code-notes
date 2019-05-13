const Joi = require('joi')

const email = {
  email: Joi.string()
    .min(7)
    .max(255)
    .required()
    .email()
}

const password = {
  password: Joi.string()
    .min(6)
    .max(1024)
    .required()
}

const validateNewUser = req => {
  const validationOptions = {
    firstname: Joi.string()
      .min(2)
      .max(25)
      .required(),
    lastname: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(7)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .max(1024)
      .required()
      .error(new Error('B01')),
    authTypes: Joi.array()
      .required()
      .error(new Error(40))
  }

  return Joi.validate(req, validationOptions)
}

module.exports = {
  email,
  password,
  validateNewUser
}
