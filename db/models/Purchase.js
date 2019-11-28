const { DataTypes } = require('sequelize'); 

const PurchaseRecord = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
}; 

module.exports = PurchaseRecord; 