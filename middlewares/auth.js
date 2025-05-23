const helpers = require('../helpers/auth-helpers')

const authenticated = (req, res, next) => {
  if (helpers.ensureAuthenticated(req)) {
    return next()
  }
  return res.redirect('/signin')
}

const adminAuthenticated = (req, res, next) => {
  if (helpers.ensureAuthenticated(req)) {
    if (helpers.getUser(req).isAdmin) return next()
    return res.redirect('/')
  } else {
    return res.redirect('/signin')
  }
}

module.exports = {
  authenticated, adminAuthenticated
}
