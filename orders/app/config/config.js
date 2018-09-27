module.exports = {
  name: 'Orders API',
  port: process.env.API_PORT || '8081',
  logLevel: process.env.LOG_LEVEL || 'info',
  mysql: {
    user: process.env.MYSQL_USER || 'dev',
    password: process.env.MYSQL_PASSWORD || 'dev',
    host: process.env.MYSQL_HOST || 'mysql',
    database: process.env.MYSQL_DATABASE || 'phoneApp',
    port: process.env.MYSQL_PORT || 3306,
  },
  health: {
    successMessage: 'I\'m alive, for now...',
  },
  phones: {
    host: process.env.PHONES_HOST || 'http://localhost:8080',
  },
};
