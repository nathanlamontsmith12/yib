const { DataTypes } = require('sequelize'); 

const RpatorPackageOption = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
}; 

module.exports = RpatorPackageOption; 