const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Chicken extends Model { }

Chicken.init({
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
  modelName: 'chicken',
});

module.exports = Chicken;