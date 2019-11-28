const { DataTypes } = require('sequelize'); 

const UniqueCustomer = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
}; 

module.exports = UniqueCustomer; 