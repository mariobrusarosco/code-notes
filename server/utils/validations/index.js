const Joi = require('joi')


module.exports.email = {
  email: Joi.string().min(7).max(255).required().email()
}

module.exports.password = {
  password: Joi.string().min(6).max(1024).required(),
}
