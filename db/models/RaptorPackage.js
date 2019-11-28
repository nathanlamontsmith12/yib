const { DataTypes } = require('sequelize'); 

const RaptorPackage = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  "3d": {
    type: DataTypes.BOOLEAN
  },
  dstv_import: {
    type: DataTypes.BOOLEAN
  },
  post_processor: {
    type: DataTypes.BOOLEAN
  },
  tekla: {
    type: DataTypes.BOOLEAN
  },
  dstv_export: {
    type: DataTypes.BOOLEAN
  },
  peddimat: {
    type: DataTypes.BOOLEAN
  },
  pedditrack: {
    type: DataTypes.BOOLEAN
  },
  dxf_inport: {
    type: DataTypes.BOOLEAN
  },
  idstv_import_export: {
    type: DataTypes.BOOLEAN
  }
}; 

module.exports = RaptorPackage; 