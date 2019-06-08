// const { createLogger, format, transports } = require('winston')
// const { combine, timestamp, label, prettyPrint } = format

// const logger = createLogger({
//   format: combine(timestamp(), prettyPrint()),
//   transports: [
//     new transports.File({ filename: 'error.log', level: 'error' }),
//     new transports.File({ filename: 'combined.log' })
//   ]
// })
const logger = require('../../utils/logger')

const expressErrorHandler = (error, req, res, next) => {
  const { message } = error

  logger.error({ message, error })

  res.status(500).send('Internal Failure')
}

module.exports = {
  expressErrorHandler
}
