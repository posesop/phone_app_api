const bunyan = require('bunyan');
const config = require('./config');

const log = bunyan.createLogger({
  name: config.name,
  level: config.logLevel,
  stream: process.stdout,
  serializers: bunyan.stdSerializers,
});

module.exports = log;
