const { DataTypes } = require('sequelize'); 

const MachineStructure = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  model: {
    type: DataTypes.STRING
  }
}; 

module.exports = MachineStructure; 