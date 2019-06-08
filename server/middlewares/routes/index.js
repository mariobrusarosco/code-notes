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

const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, prettyPrint } = format

const logger = createLogger({
  format: combine(timestamp(), prettyPrint()),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
})

const routeErrorHandler = (error, req, res, next) => {
  const { message } = error

  logger.error({ message })

  res.status(500).send('Internal Failure')
}

module.exports = {
  routeMiddleware,
  routeErrorHandler
}
