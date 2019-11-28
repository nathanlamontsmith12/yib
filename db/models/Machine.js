const { DataTypes } = require('sequelize'); 

const MachineStructure = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
}; 

module.exports = MachineStructure; 