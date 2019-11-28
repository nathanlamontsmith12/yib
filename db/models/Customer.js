const { DataTypes } = require('sequelize'); 

const CustomerStructure = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING
  },
  contact: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  account_manager: {
    type: DataTypes.STRING
  }
}; 

module.exports = CustomerStructure; 