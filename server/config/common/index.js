// Project's Package JSON
const packageJSON = require('../../../package.json')

// Project's ErrorsMap
const errorsMap = require('./errorsMap')

const commonConfiguration = {
  APP_NAME: "Code Notes",
  VERSION: packageJSON.version,
  errorsMap,
}

module.exports = commonConfiguration
