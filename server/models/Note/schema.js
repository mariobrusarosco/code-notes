const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  description: String,
  language: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = NoteSchema
