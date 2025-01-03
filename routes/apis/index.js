const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')

const admin = require('./modules/admin')
const { authenticated, adminAuthenticated } = require('../../middlewares/api-auth')
const { apiErrorHandler } = require('../../middlewares/error-handler')
const restController = require('../../controllers/apis/restaurant-controller')
const userController = require('../../controllers/apis/user-controller')

router.use('/admin', authenticated, adminAuthenticated, admin)

router.get('/restaurants', authenticated, restController.getRestaurants)

router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)
router.post('/signUp', userController.signUp)

router.use('/', apiErrorHandler)

module.exports = router
