const root = require('./root');
const phones = require('./phones');
const docs = require('./docs');


const checkParamsMiddleware = (req, res, next) => {
  if (!req || !res || !next) {
    throw new Error('req, res and next params are required');
  }
  return next();
};

exports.addRoutesTo = (server, router, controller) => {
  if (!server || !router || !controller) throw new Error('No router, server or controller');

  router.use(checkParamsMiddleware);

  router.get('/', root.get);

  router.get(
    '/_docs',
    docs.get,
  );

  router.get(
    '/phones',
    phones.get(controller.getPhones),
  );

  router.applyRoutes(server);
};
