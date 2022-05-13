const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Seafood extends Model { }

Seafood.init({
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
  modelName: 'seafood',
});

module.exports = Seafood;