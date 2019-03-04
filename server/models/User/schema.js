const mongoose = require('mongoose')
const joi = require('joi')

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
	// Asyncrhonous Validation
	// authTypes: {
	// 	type: Array,
	// 	validate: {
	// 		isAsync: true,
	// 		validator: function(v, cb) {
	// 			setTimeout(() => {
	// 				const validationResult = v && v.length > 0
	// 				cb(validationResult)
	// 			}, 5000)
	// 		},
	// 		message: 'An user must have at least one type of authentication'
	// 	}
	// },
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

module.exports = userSchema
