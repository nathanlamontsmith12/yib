const { DataTypes } = require('sequelize'); 

const OrderStructure = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
}; 

module.exports = OrderStructure; 