const routeMiddleware = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res)
    }
    catch (exception) {
      next(exception)
    }
  }
}

const winston = require('winston')

const routeErrorHandler = (error, req, res) => {
  // winston.error(error, error.message)

  res.status(500).send('Internal Failure')
}


module.exports = {
  routeMiddleware,
  routeErrorHandler
}
