const { DataTypes } = require('sequelize'); 

const PurchaseRecord = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  license_type: {
    type: DataTypes.STRING
  },
  start_date: {
    type: DataTypes.DATE
  },
  expiration_date: {
    type: DataTypes.DATE
  },
  price: {
    type: DataTypes.DECIMAL
  }
}; 

module.exports = PurchaseRecord; 