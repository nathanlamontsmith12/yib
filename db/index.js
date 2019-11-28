const { Sequelize } = require("sequelize");
const DB_CONNECTION_STRING = process.env.DATABASE_URI;

const Op = Sequelize.Op;
const sequelize = new Sequelize(DB_CONNECTION_STRING);


// IMPORT STRUCTURES 
const CustomerStructure = require("./models/Customer");
const UniqueCustomerStructure = require("./models/UniqueCustomer");
const MachineStructure = require("./models/Machine");
const MachineTypeStructure = require("./models/MachineType");
const OrderStructure = require("./models/Order");
const PurchaseStructure = require("./models/Purchase");
const PurchaseTypeStructure = require("./models/PurchaseType");
const RaptorCustomPackageStructure = require("./models/RaptorCustomPackage");
const RaptorPackageStructure = require("./models/RaptorPackage");

// DEFINE MODELS 
const modelOptions = {
  underscore: true,
  paranoid: false,
  timestamps: true
};

const Customer = sequelize.define("customer", CustomerStructure, modelOptions)
const UniqueCustomer = sequelize.define("unique_customer", UniqueCustomerStructure, modelOptions)
const Machine = sequelize.define("machine", MachineStructure, modelOptions)
const MachineType = sequelize.define("machine_type", MachineTypeStructure, modelOptions)
const Order = sequelize.define("order", OrderStructure, modelOptions)
const Purchase = sequelize.define("purchase", PurchaseStructure, modelOptions)
const PurchaseType = sequelize.define("purchase_type", PurchaseTypeStructure, modelOptions)
const RaptorCustomPackage= sequelize.define("raptor_custom_package", RaptorCustomPackageStructure, modelOptions)
const RaptorPackage= sequelize.define("raptor_package", RaptorPackageStructure, modelOptions)

// CREATE ASSOCIATIONS 

module.exports = {
  Op,
  sequelize,
  Customer,
  UniqueCustomer,
  Machine,
  MachineType,
  Order,
  Purchase,
  PurchaseType,
  RaptorCustomPackage,
  RaptorPackage
};