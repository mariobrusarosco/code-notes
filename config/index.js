console.log(`-- [ ENVIRONMENT ] ->  ${process.env.NODE_ENV}`)

const appConfig = () => {
  return {
    ...require(`./${process.env.NODE_ENV}`),
    ...require('./common') // Import everything that is common to all environments
  }
}

module.exports = appConfig
