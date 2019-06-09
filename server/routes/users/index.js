const express = require('express')
const Router = express.Router()
const Joi = require('joi')
const R = require('ramda')

// Project's Config
const { errorsMap, USER_COOKIE_NAME } = require('../../config')

// Middlewares
const authorization = require('../../middlewares/authorization')

// Utils
const { validateNewUser, validateExistingUser } = require('../../utils/validations')
const { userPublicData } = require('../../utils/User')

const hashPassword = async password => {
  const bcrypt = require('bcrypt')
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  return hashedPassword
}

// Models
const User = require('../../models/User')

Router.get('/', authorization, async (req, res) => {
  const allUsers = await User.find()

  res.send(allUsers)
})

Router.patch('/:id', authorization, async (req, res) => {
  const body = req.body
  const id = req.params.id
  /*
   * Exisitng User Verification
   */
  const user = await User.findById(id)

  if (!user) {
    return res.status(400).send(errorsMap['A09'])
  }

  /*
   * Updating User
   */
  const updatedUser = await User.findOneAndUpdate(
    { _id: id },
    {
      $set: { ...body }
    },
    { new: true }
  )
  /*
   * Saving the Updated User
   */
  await updatedUser.save()

  /*
   * Updating User's cookie
   */
  const userToken = updatedUser.generateUserIdToken()

  res.cookie(USER_COOKIE_NAME, userToken, {
    // expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
  })

  res.send(userPublicData(updatedUser))
})

Router.post('/', async (req, res) => {
  //  Validation Errors
  const { error } = validateNewUser(req.body)

  if (error) {
    return res.status(400).send(errorsMap[error.message])
  }

  // User already registered Validation
  const { email } = req.body
  const existingUser = await User.findOne({ email })

  if (existingUser) {
    return res.status(400).send(errorsMap['D01'])
  }

  const { firstname, lastname, password, authTypes } = req.body

  const hashedPassword = await hashPassword(password)

  const newUser = new User({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    authTypes
  })

  await newUser.save()

  return res.send('Thanks!! Your user was successfully registered!')
})

// Router.put('/', async (req, res) => {
//   //  Validation Errors
//   const { error } = validateExistingUser(req.body)

//   if (error) {
//     return res.status(400).send(errorsMap[error.message])
//   }

//   const { id } = req.body

//   const user = await User.findById(id)

//   if (!user) {
//     return res.send('user not found')
//   }

//   // Query and then update approach

//   // Assigning new properties
//   user.isPublished = false
//   user.name = "Walter 'Heisenberg' White"

//   // Using ge .set() method
//   user.set({
//     isPublished: false,
//     name: "Walter 'Heisenberg' White"
//   })

//   // Update First approach
//   const updatedUser = await User
//     .findOneAndUpdate(
//       {_id: mockedId },
//       {
//         $set: {
//           name: 'bbbbb',
//           isPublished: false
//         }
//       },
//       { new: true }
//     ).select('name')

//   // const updatedUser = await user.save()

//   res.send(updatedUser)
// })

module.exports = Router

// Router.get('/', async (req, res) => {
//   const allUsers = await User.find({
//     isPublished: true,
//     name: { $in: ['Walter White', 'Heisenberg'] },
//     email: { $eq: 'ww@gmail.com' }
//   })
//     .limit(10)
//     .sort({ name: 1 }) // 1 means 'ASC' and -1 means -1
//     //.sort('name')
//     .select({ name: 1, email: -1 })
//   // simple select version
// 	//.select('name -email')

//   res.send(allUsers)
// })

// Using .validate() from mongoose
// newUser.validate()
// 	.then(data => {
// 		console.log('data', data)
// 	})
// 	.catch(e => console.error(e.message))
// const validation = await newUser.validate()

// 		try {
// 			const result = await newUser.save()

// 			res.send(result)
// 		} catch (e) {
// 			const errors = Object.keys(e.errors)
// 				.map(error => e.errors[error]['message'])

// 				res.status(400).send(errors)
// 		}
// })

//
// Router.delete('/', async (req, res) => {
// 	const mockedId = '5c68273df7f5d0328bd50303'

// 	const deletedUser = await User.findOneAndRemove(
// 		{
// 			_id: mockedId,
// 		}
// 	)

// 	res.send(deletedUser)
// })

// Common Functions

// const getUser = req => {
//   return mock.users.find(user => {
//     return user.id === parseInt(req.params.id)
//   })
// }

// Router.get('/:id', (req, res) => {
//   const user = getUser(req)

//   if (!user) {
//     return res.status(404).send('Invalid User Id')
//   }

//   return res.send(user)
// })

// Router.get('/', (req, res) => {
//   res.send(mock.users)
// })

// Router.post('/', (req, res) => {
//   // TODO:Two options of validation:
//   // -> 'joi' library
//   // ->  'Own validators'
//   validateUser(req)
//     .then(({ name }) => {
//       const user = {
//         id: mock.users.length + 1,
//         name
//       }

//       mock.users.push(user)
//       return res.send(mock.users)
//     })
//     .catch(({ details }) => res.status(404).send(details.map(error => error.message)))
// })

// Router.put('/:id', (req, res) => {
//   const user = getUser(req)

//   if (!user) {
//     return res.status(404).send('Invalid User Id')
//   }

//   validateUser(req)
//     .then(({ name }) => {
//       user.name = name
//       return res.send(user)
//     })
//     .catch(({ details }) => res.status(404).send(details.map(error => error.message)))
// })

// Router.delete('/:id', (req, res) => {
//   const user = getUser(req)

//   if (!user) {
//     return res.status(404).send('Invalid User Id')
//   }

//   console.log('deleting user')
//   return res.send(user)
// })
