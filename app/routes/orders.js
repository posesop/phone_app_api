const errors = require('restify-errors');
const log = require('../config/log');

exports.post = postOrder => async (req, res, next) => {
  log.debug(`DEBUG: Method route post order, INPUT - Request: ${req}, Response: ${res}, Next: ${next}`);
  try {
    const data = await postOrder(req.body);
    res.send(201, { data });
    return next();
  } catch (error) {
    log.error('ERROR: Method route post order', error);
    const err = new errors.InternalError('oh noes!');
    return next(err);
  }
};
