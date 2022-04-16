const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Menu extends Model {}

Menu.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE
  },
  specialtyName1: {
    type: DataTypes.STRING
  },
  specialtyDesc1: {
    type: DataTypes.TEXT
  },
  specialtyName2: {
    type: DataTypes.STRING
  },
  specialtyDesc2: {
    type: DataTypes.TEXT
  },
  specialtyName3: {
    type: DataTypes.STRING
  },
  specialtyDesc3: {
    type: DataTypes.TEXT
  }


}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'menu',
});

module.exports = Menu;