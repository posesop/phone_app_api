const log = require('../config/log');
const errors = require('restify-errors');

exports.post = postOrder => async (req, res, next) => {
  log.info('PEPEPEPEP');
  log.debug(`DEBUG: Method route post order, INPUT - Request: ${req}, Response: ${res}, Next: ${next}`);
  try {
    const data = await postOrder(req.body);
    res.send({ data });
    return next();
  } catch (error) {
    log.error('ERROR: Method route post order', error);
    console.log('JAJAJA');
    const err = new errors.InternalError('oh noes!');
    return next(err);
  }
};
