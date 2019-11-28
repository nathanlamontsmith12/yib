const { Sequelize } = require("sequelize");
const DB_CONNECTION_STRING = process.env.DATABASE_URI;

const Op = Sequelize.Op;
const sequelize = new Sequelize(DB_CONNECTION_STRING);


// IMPORT STRUCTURES 
const CustomerStructure = require("./models/Customer");
const UniqueCustomerStructure = require("./models/UniqueCustomer");
const CustomerMachineStructure = require("./models/CustomerMachine"); 
const MachineStructure = require("./models/Machine");
const MachineTypeStructure = require("./models/MachineType");
const OrderStructure = require("./models/Order");
const PurchaseStructure = require("./models/Purchase");
const PurchaseTypeStructure = require("./models/PurchaseType");
const RaptorPackageStructure = require("./models/RaptorPackage");

// DEFINE MODELS 
const modelOptions = {
  underscored: true,
  paranoid: false,
  timestamps: true
};

const UniqueCustomer = sequelize.define("unique_customer", UniqueCustomerStructure, modelOptions);
const Customer = sequelize.define("customer", CustomerStructure, modelOptions);
const CustomerMachine = sequelize.define("customer_machine", CustomerMachineStructure, modelOptions);
const Machine = sequelize.define("machine", MachineStructure, modelOptions);
const MachineType = sequelize.define("machine_type", MachineTypeStructure, modelOptions);
const Order = sequelize.define("order", OrderStructure, modelOptions);
const Purchase = sequelize.define("purchase", PurchaseStructure, modelOptions);
const PurchaseType = sequelize.define("purchase_type", PurchaseTypeStructure, modelOptions);
const RaptorPackage= sequelize.define("raptor_package", RaptorPackageStructure, modelOptions);

// CREATE ASSOCIATIONS 
// customer
UniqueCustomer.hasMany(Customer); 
Customer.belongsTo(UniqueCustomer); 
// machine - customer 
Machine.belongsToMany(UniqueCustomer, {through: CustomerMachine});
UniqueCustomer.belongsToMany(Machine, {through: CustomerMachine});
// machine -- type 
Machine.belongsTo(MachineType); 
MachineType.hasMany(Machine); 
// purchase relations 
Purchase.belongsTo(CustomerMachine); 
CustomerMachine.hasMany(Purchase); 
Purchase.belongsTo(PurchaseType);
PurchaseType.hasMany(Purchase);
Purchase.belongsTo(Order); 
Order.hasMany(Purchase); 
Purchase.belongsTo(RaptorPackage);
RaptorPackage.hasMany(Purchase); 

module.exports = {
  Op,
  sequelize,
  UniqueCustomer,
  Customer,
  CustomerMachine,
  Machine,
  MachineType,
  Order,
  Purchase,
  PurchaseType,
  RaptorPackage
};