const { DataTypes } = require('sequelize'); 

const RaptorCustomPackage = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
}; 

module.exports = RaptorCustomPackage; 