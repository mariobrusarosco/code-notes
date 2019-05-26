const express = require('express')
const Router = express.Router()

// Models
const Note = require('../../models/Note')
const Language = require('../../models/Language')

Router.get('/', async (req, res) => {
  try {
    const allNotes = await Note.find()
      .populate('user', 'name email-_id')
      // .populate('language', 'name')
      .populate('related_notes', 'description')
      .select('user description language related_notes')

    res.send(allNotes)
  } catch (e) {
    console.log(e)
    res.send(e)
  }
})

Router.post('/', async (req, res) => {
  const { description, language, user, related_notes } = req.body

  const newNote = await new Note({
    description,
    language,
    user,
    related_notes
  })

  const insertionResult = await newNote.save()

  res.send(insertionResult)
})

Router.put('/', async (req, res) => {
  const { id, updates } = req.body

  const note = await Note.update(
    { _id: id },
    {
      $set: {
        description: 'Altered',
        language: updates.language
      }
    },
    { new: true }
  )

  res.send(note)
})

module.exports = Router
