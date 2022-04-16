const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Protein extends Model {}

Protein.init({
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
  },
  extra: {
    type: DataTypes.STRING,
  },

}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'protein',
});

module.exports = Protein;