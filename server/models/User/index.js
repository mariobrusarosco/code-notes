const mongoose = require('mongoose')
const userSchema = require('./schema')

// This is a class!! You're creating a class...e model to be instantiated
const User = mongoose.model('Users', userSchema)

module.exports = User
