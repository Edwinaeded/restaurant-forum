const express = require('express')
const router = express.Router()
const passport = require('../config/passport')

const userController = require('../controllers/user-controller')
const restController = require('../controllers/restaurant-controller')
const commentController = require('../controllers/comment-controller')
const { authenticated, adminAuthenticated } = require('../middlewares/auth')
const admin = require('./modules/admin')
const { generalErrorHandler } = require('../middlewares/error-handler')

router.use('/admin', adminAuthenticated, admin)

router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', {
  failureRedirect: '/signin',
  failureFlash: true
}), userController.signIn)
router.get('/logout', userController.logout)

router.get('/restaurants/:id/dashboard', authenticated, restController.getDashboard)
router.get('/restaurants/:id', authenticated, restController.getRestaurant)
router.get('/restaurants', authenticated, restController.getRestaurants)

router.delete('/comments/:id', adminAuthenticated, commentController.deleteComment)
router.post('/comments', authenticated, commentController.postComment)

router.use('/', (req, res) => {
  res.redirect('/restaurants')
})
router.use('/', generalErrorHandler)

module.exports = router
