// Project's Package JSON
const packageJSON = require('../../package.json')

const commonConfiguration = {
  APP_NAME: 'Code Notes',
  VERSION: packageJSON.version,
  ENV: process.env.NODE_ENV,
  buildTime: new Date()
}

module.exports = commonConfiguration
