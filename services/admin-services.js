const { Restaurant, Category } = require('../models')

const adminServices = {
  getRestaurants: (req, callback) => {
    Restaurant.findAll({
      raw: true,
      nest: true,
      include: [Category]
    })
      .then(restaurants => {
        return callback(null, {
          restaurants,
          currentTab: 'tabRestaurants'
        })
      })
      .catch(err => callback(err))
  }
}

module.exports = adminServices
