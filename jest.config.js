// Project's configuration
const config = require('./config')

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testMatch: ['<rootDir>/src/**/*.test.*'],
  roots: ['<rootDir>', '<rootDir>/src'],
  modulePaths: ['<rootDir>', '<rootDir>/src'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy'
  },
  globals: {
    APP: config()
  }
}
