const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Carniceria extends Model {}

Carniceria.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
  },
  translated: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'carniceria',
});

module.exports = Carniceria;