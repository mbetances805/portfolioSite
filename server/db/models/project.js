const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stack: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false
  },
  summary: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Project
