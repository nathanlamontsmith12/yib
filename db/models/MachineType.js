const { DataTypes } = require('sequelize'); 

const MachineType = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
}; 

module.exports = MachineType; 