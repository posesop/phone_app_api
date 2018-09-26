const mysql = require('mysql');
const util = require('util');
const mySqlClient = require('./mysql');
const config = require('../config/config');
const log = require('../config/log');

const mysqlConnection = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
  port: config.mysql.port,
});
mysqlConnection.query = util.promisify(mysqlConnection.query);
mysqlConnection.on('error', err => log.error(err.code));

exports.getPhones = () => 
  mySqlClient.getPhones(mysqlConnection)();