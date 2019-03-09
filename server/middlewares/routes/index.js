const routeMiddleware = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res)
    }
    catch (exception) {
      next(exception)
      res.status(500).send('Internal Failure')
    }
  }
}

module.exports = routeMiddleware
