const log = require('../config/log');
const errors = require('restify-errors');

exports.get = getPhones => async (req, res, next) => {
  log.debug(`DEBUG: Method route get phones, INPUT - Request: ${req}, Response: ${res}, Next: ${next}`);
  try {
    const data = await getPhones();
    res.send({ data });
    return next();
  } catch (error) {
    log.error('ERROR: Method route get phones', error);
    const err = new errors.InternalError('oh noes!');
    return next(err);
  }
};
