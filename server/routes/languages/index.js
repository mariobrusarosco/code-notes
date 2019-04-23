const express = require('express')
const Router = express.Router()

const Language = require('../../models/Language')

Router.post('/', async (req, res) => {
  const { name } = req.body

  const newLanguage = await new Language({
    name
  })

  await newLanguage.save()
  res.send(newLanguage)
})

Router.put('/', async (req, res) => {
  const { newUsername: username } = req.body

  res.send(newUsername)
})

Router.get('/', async (req, res) => {
  const allLanguages = await Language.find()

  res.send(allLanguages)
})

module.exports = Router
