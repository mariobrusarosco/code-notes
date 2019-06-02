const { createLogger, format, transports } = require('winston')

const infoLogger = createLogger({
  // level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'MM-DD-YYYY HH:mm:ss'
    })
    // format.errors({ stack: true }),
    // format.splat(),
    // format.json()
  ),
  defaultMeta: { service: 'your-service-name' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({ filename: 'quick-start-error.log', level: 'error' })
    // new transports.File({ filename: 'quick-start-combined.log' })
  ]
})

const errorLogger = createLogger({
  level: 'error',
  format: format.combine(
    format.timestamp({
      format: 'MM-DD-YYYY HH:mm:ss'
    })
    // format.errors({ stack: true }),
    // format.splat(),
    // format.json()
  ),
  defaultMeta: { service: 'your-service-name' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({ filename: 'quick-start-error.log', level: 'error' }),
    new transports.File({ filename: 'quick-start-combined.log' })
  ]
})

module.exports = {
  infoLogger,
  errorLogger
}
