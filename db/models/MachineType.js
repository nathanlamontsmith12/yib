const { DataTypes } = require('sequelize'); 

const MachineType = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  raptor_type: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  }
}; 

module.exports = MachineType; 