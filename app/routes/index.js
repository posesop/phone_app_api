const validator = require('./middlewares/validator');
const root = require('./root');
const phones = require('./phones');
const order = require('./order');

const postOrderBody = require('./schemas/postOrderBody.json');

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
    '/phones', 
    phones.get(controller.getPhones),
  );

  router.post(
    '/order', 
    validator.body(postOrderBody),
    order.post(controller.postOrder),
  );

  router.applyRoutes(server);
};
