const { DataTypes } = require('sequelize'); 

const CustomerStructure = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
}; 

module.exports = CustomerStructure; 