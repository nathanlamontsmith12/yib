const { DataTypes } = require('sequelize'); 

const PurchaseType = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  }
}; 

module.exports = PurchaseType; 