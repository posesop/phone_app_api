module.exports = {
  name: 'Phone APP API',
  port: process.env.API_PORT || '8080',
  logLevel: process.env.LOG_LEVEL || 'info',
  mysql: {
    user: process.env.SQL_USER || 'dev',
    password: process.env.SQL_PASSWORD || 'dev',
    host: process.env.SQL_HOST || '127.0.0.1',
    database: process.env.SQL_DATABASE || 'phoneapp',
  },
  health: {
    successMessage: 'I\'m alive, for now...',
  },
};
