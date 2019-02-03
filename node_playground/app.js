// require('./functions')
// require('../values.js')

// console.log(module.exports)
// console.log(exports)

const Emitter = require('./emitter')

const emitter = new Emitter()

emitter.on('greet', () => {
  console.log('Greet Event was emitted')
})

emitter.on('greet', () => {
  console.log('Second listenet: Greet Event was emitted')
})

emitter.emit('greet')

const NodeEmitter = require('events')
const nodeEmitter = new NodeEmitter()

nodeEmitter.on('node-greet', () => {
  console.log('Node greet event was emitted')
})

nodeEmitter.emit('node-greet')

const util = require('util')
const Gretter = require('./inheritance')

const gretter = new Gretter()

gretter.on('greet', data => {
  console.log('greet event emitted inheritance!!!!!!', data)
})

gretter.greet('aeeeee')
