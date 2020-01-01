const config = require('./src/app-configuration.json')

module.exports = {
  testMatch: ['**/src/**/*.spec.js'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  globals: {
    APP: config
  }
}
