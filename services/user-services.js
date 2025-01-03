const bcrypt = require('bcryptjs')
const db = require('../models')
const { User } = db

const userServices = {
  signUp: (req, callback) => {
    if (req.body.password !== req.body.passwordCheck) throw new Error('Passwords do not match!')
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user) throw new Error('Email already exists!')

        return bcrypt.hash(req.body.password, 10)
      })
      .then(hash => User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
      }))
      .then(newUser => callback(null, { user: newUser }))
      .catch(err => callback(err))
  }
}

module.exports = userServices
