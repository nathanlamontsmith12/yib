const { DataTypes } = require('sequelize'); 

const RaptorPackage = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
}; 

module.exports = RaptorPackage; 