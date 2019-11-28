const { DataTypes } = require('sequelize'); 

const CustomerMachineStructure = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  serial_number: {
    type: DataTypes.STRING
  },
  ship_year: {
    type: DataTypes.STRING
  },
  file_location: {
    type: DataTypes.STRING
  }
}; 

module.exports = CustomerMachineStructure; 