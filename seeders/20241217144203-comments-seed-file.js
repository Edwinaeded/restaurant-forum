'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query('SELECT id FROM Users;', { type: queryInterface.sequelize.QueryTypes.SELECT })
    const restaurants = await queryInterface.sequelize.query('SELECT id FROM Restaurants;', { type: queryInterface.sequelize.QueryTypes.SELECT })
    await queryInterface.bulkInsert('Comments', ['好吃!', '麵的口感不錯!', '還會想要回訪的好味道', '餐廳環境很不錯', '需要提前訂位～'].map(item => {
      return {
        text: item,
        user_id: users[0].id,
        restaurant_id: restaurants[Math.floor(Math.random() * 2)].id,
        created_at: new Date(),
        updated_at: new Date()
      }
    }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', {})
  }
}
