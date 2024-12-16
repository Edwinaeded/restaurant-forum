const { User, Comment, Restaurant } = require('../models')

const commentController = {
  postComment: (req, res, next) => {
    const { text, restaurantId } = req.body
    const userId = req.user.id
    if (!text) {
      req.flash('error_messages', 'Comment text is required!')
      return res.redirect(`/restaurants/${restaurantId}`)
    }

    return Promise.all([
      User.findByPk(userId),
      Restaurant.findByPk(restaurantId)
    ])
      .then(([user, restaurant]) => {
        if (!user) throw new Error('User do not exist!')
        if (!restaurant) throw new Error('Restaurant do not exist!')
        return Comment.create({
          text,
          userId,
          restaurantId
        })
      })
      .then(comment => {
        req.flash('success_messages', 'Comment has been created successfully!')
        return res.redirect(`/restaurants/${restaurantId}`)
      })
      .catch(err => next(err))
  },
  deleteComment: (req, res, next) => {
    Comment.findByPk(req.params.id)
      .then(comment => {
        if (!comment) throw new Error('Comment did not exist!')
        return comment.destroy()
      })
      .then(deletedComment => {
        req.flash('success_messages', 'Comment has been deleted successfully!')
        return res.redirect(`/restaurants/${deletedComment.restaurantId}`)
      })
      .catch(err => next(err))
  }
}

module.exports = commentController
