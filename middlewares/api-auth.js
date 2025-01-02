const passport = require('../config/passport')

const authenticated = (req, res, next) => {
  passport.authenticate('jwt', { session: false })(req, res, next)
}

const adminAuthenticated = (req, res, next) => {
  if (req.user && req.user.isAdmin) return next()

  return res.status(403).json({ status: 'error', message: 'permission denied' })
}

module.exports = {
  authenticated, adminAuthenticated
}
