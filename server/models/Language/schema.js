// Vendors
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LanguageSchema = new Schema({
  name: String,
  user: {
    type: ObjectId,
    ref: 'User'
  },
})

module.exports = LanguageSchema
