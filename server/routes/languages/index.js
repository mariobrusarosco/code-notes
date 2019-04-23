const express = require('express')
const Router = express.Router()

// Models
const Language = require('../../models/Language')

// Middlewares
const authorization = require('../../middlewares/authorization')

Router.post('/', authorization, async (req, res) => {
  const { name, userId } = req.body

  const newLanguage = await new Language({
    name,
    user: userID
  })

  await newLanguage.save()
  res.send(newLanguage)
})

Router.put('/', async (req, res) => {
  const { newUsername: username } = req.body

  res.send(newUsername)
})

Router.get('/', async (req, res) => {
  const allLanguages = await Language
    .find()
    .populate('user', 'name email-_id')   

  res.send(allLanguages)
})

module.exports = Router
