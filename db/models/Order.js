const { DataTypes } = require('sequelize'); 

const OrderStructure = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  acknowledgement_location: {
    type: DataTypes.STRING
  },
  quote_location: {
    type: DataTypes.STRING
  },
  quote_identifier: {
    type: DataTypes.STRING
  },
  date: {
    type: DataTypes.DATE
  },
  value: {
    type: DataTypes.DECIMAL
  },
  discount: {
    type: DataTypes.STRING
  },
  comment: {
    type: DataTypes.TEXT
  }
}; 

module.exports = OrderStructure; 