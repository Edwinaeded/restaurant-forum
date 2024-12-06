const { ensureAuthenticated, getUser } = require('../helpers/auth-helpers')

const authenticated = (req, res, next) => {
  if (ensureAuthenticated(req)) {
    return next()
  }
  return res.redirect('/signin')
}

const adminAuthenticated = (req, res, next) => {
  if (ensureAuthenticated(req)) {
    if (getUser(req).isAdmin) return next()
    return res.redirect('/')
  } else {
    return res.redirect('/signin')
  }
}

module.exports = {
  authenticated, adminAuthenticated
}
