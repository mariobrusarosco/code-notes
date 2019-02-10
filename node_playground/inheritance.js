const EventEmitter = require('events')
const util = require('util')

function Gretter() {
  this.grettingProp = 'Gretting prop'
}

// util.inherits(Gretter, EventEmitter)
// Gretter.prototype = EventEmitter.prototype
Gretter.prototype = Object.create(EventEmitter.prototype)

Gretter.prototype.greet = function(data) {
  this.emit('greet', data)
}

module.exports = Gretter
