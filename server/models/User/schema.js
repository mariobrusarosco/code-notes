const mongoose = require('mongoose')
const joi = require('joi')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  // Simple validation
  firstname: {
    required: true,
		type: String,
		minlength: 2,
		maxlength: 25
  },
  lastname: {
    required: true,
		type: String,
		minlength: 2,
		maxlength: 50
	},
  email: {
    unique: true,
    required: true,
		type: String,
		minlength: 7,
		maxlength: 255
  },
  password: {
    required: true,
		type: String,
		minlength: 6,
		maxlength: 1024
  },
	authTypes: {
		type: Array,
		validate: {
			validator: function(v) {
				return v && v.length > 0
			},
			message: 'An user must have at least one type of authentication'
		}
	},
  lastAccess: {
    type: Date,
    default: Date.now()
	},
	isPublished: Boolean,
	// Conditional Validation
	numberOfPurchases: {
		type: Number,
		required: function() {
			return this.isPublished
		}
  },
  username: String
})

userSchema.methods.generateJWT = function() {
  return jwt.sign({ email: this.email }, process.env.JWT_SECRET)
}

module.exports = userSchema
