const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  lastAccess: {
    type: Date,
    default: Date.now()
  },
  isPublished: Boolean
})

module.exports = userSchema
