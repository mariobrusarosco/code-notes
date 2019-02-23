const express = require('express')
const Router = express.Router()

const Notes = require('../../models/Note')

Router.get('/', async (req, res) => {
  try {
    const allNotes = await Notes
      .find()
      .populate('user', 'name -_id')
      //.populate('languages') --> In case we have another collection named 'languages', we could poulated it as well
      .select('user description language')

      console.log(allNotes)
      res.send(allNotes)
  } catch(e) {
    console.log(e)
    res.send(e)
  }

})

Router.post('/', async (req, res) => {
  const { description, language, user } = req.body

  const note = await new Notes({
    description,
    language,
    user,
  })

  const insertionResult = note.save()

  res.send(insertionResult)
})

module.exports = Router
