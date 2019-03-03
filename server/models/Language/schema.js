// Vendors
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LanguageSchema = new Schema({
  name: String
})

module.exports = LanguageSchema
