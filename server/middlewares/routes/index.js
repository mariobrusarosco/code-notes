// const { infoLogger } = require('../../utils/logger')

const routeMiddleware = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res)
    } catch (exception) {
      console.log('calling... next()...')
      next(exception)
    }
  }
}

const winston = require('winston')
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

const routeErrorHandler = (error, req, res, next) => {
  console.log('error handler')
  logger.error({
    level: 'error',
    message: 'Info!!'
  })

  logger.log({
    level: 'info',
    message: 'Info!'
  })

  // infoLogger.error('error')
  res.status(500).send('Internal Failure')
}

module.exports = {
  routeMiddleware,
  routeErrorHandler
}
