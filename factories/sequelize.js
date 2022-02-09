const Sequelize = require('sequelize');

const sequelizeConfig = require('../config/sequelize')
const initModels = require('../models/init-models');

const sequelize = new Sequelize(sequelizeConfig.uri, sequelizeConfig.options);

initModels(sequelize);

module.exports = sequelize;
