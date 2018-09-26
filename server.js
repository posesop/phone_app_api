const restify = require('restify');
const responseTime = require('response-time');
const { Router } = require('restify-router');
const healthRouterFactory = require('restify-health-router');
const config = require('./app/config/config');
const log = require('./app/config/log');

const routes = require('./app/routes');
const controllers = require('./app/controllers');
// const repository = require('./src/repository');

const init = () => {
  const server = restify.createServer({
    name: config.name,
  });

  server.on('after', (req, res, next, error) => {
    restify.plugins.auditLogger({
      log,
      event: 'after',
      printLog: req.href() !== '/health',
    })(req, res, next, error);
  });

  server.use(restify.plugins.queryParser());
  server.use(restify.plugins.bodyParser());
  server.use(responseTime());

  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    return next();
  });

  const router = new Router();

  routes.addRoutesTo(server, router, controllers.init());
  const healthRouter = healthRouterFactory.create(config.health);
  healthRouter.applyRoutes(server);

  return server;
};

if (!module.parent) {
  const server = init();
  server.listen(config.port, () => {
    log.info(`${server.name} listening at ${server.url}`);
  });
}

module.exports = {
  init,
};
