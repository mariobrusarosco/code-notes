// Impor .env

const options = {
  local: require('./local'),
  development: require('./development'),
  production: require('./production')
}

const appConfig = () => {
  console.log(
    'process.env.APP_ENVIRONMENT--------------------------------',
    process.env.APP_ENVIRONMENT
  )
  console.log(
    'process.env.NODE_ENV--------------------------------',
    process.env.NODE_ENV
  )
  return {
    ...options[process.env.APP_ENVIRONMENT],
    ...require('./common')
  }
}

module.exports = appConfig
