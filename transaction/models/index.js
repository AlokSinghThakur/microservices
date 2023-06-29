const { Sequelize } = require('sequelize');

const transactionModel = require('./transaction')

exports.db_config = new Sequelize(
  'transactionms',
    // 'dummy',
    // 'root',
    'root',
    // 'password',
    'password',
    {
      host:  'localhost',
      // host :'localhost',
      dialect: 'mysql',
      operatorsAliases: 0,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      timezone: '+05:30',
      logging: false,
    }
  );

  

exports.transactionModel = transactionModel(exports.db_config)