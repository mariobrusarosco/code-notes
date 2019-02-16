const logger = function(req, res, next) {
  console.log('login user')
  next()
}

module.exports = logger
