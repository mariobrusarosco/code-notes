const PORT = process.env.PORT || 9090

const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
	return res.send(`Serving Code Notes at ${PORT}`)
	// res.render('index', {
	// 	pugTest: 'Pug Rendered'
	//  })
})

module.exports = Router
