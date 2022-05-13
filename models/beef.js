const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Beef extends Model { }

Beef.init({
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
  modelName: 'beef',
});

module.exports = Beef;