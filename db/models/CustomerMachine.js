const { DataTypes } = require('sequelize'); 

const CustomerMachineStructure = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
}; 

module.exports = CustomerMachineStructure; 