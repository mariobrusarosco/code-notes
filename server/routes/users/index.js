const express = require('express')
const Router = express.Router()
const Joi = require('joi')


// Common Functions


const User = require('../../models/User')


Router.get('/', async (req, res) => {
	const allUsers = await User.find({
		name: 'Walter White',
		isPublished: true,
	})
	.limit(10)
	.sort({ name: 1 }) // 1 means 'ASC' and -1 means -1
	.select( { name: 1 })

	res.send(allUsers)
})


Router.post('/', async (req, res) => {
	const newUser = new User({
		name: 'Mario Brusarosco',
		email: 'mariobrusaroscog@gmail.com',
		isPublished: true,
	})

	const result =  await newUser.save()

	res.send(result)
})
// Common Functions
// const validateUser = req => {
//   const validationOptions = {
//     name: Joi.string()
//       .min(3)
//       .required()
//   }

//   return Joi.validate(req.body, validationOptions)
// }

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

module.exports = Router
