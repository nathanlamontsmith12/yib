const { Sequelize } = require("sequelize");
const DB_CONNECTION_STRING = process.env.DATABASE_URI;

const Op = Sequelize.Op;
const sequelize = new Sequelize(DB_CONNECTION_STRING);


// IMPORT STRUCTURES 


// DEFINE MODELS 


// CREATE ASSOCIATIONS 

module.exports = {
  Op,
  sequelize
};