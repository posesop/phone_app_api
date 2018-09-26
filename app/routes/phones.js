const log = require('../config/log');

exports.get = getPhones => (req, res, next) => {
  log.debug(`DEBUG: Method route get sources, INPUT - Request: ${req}, Response: ${res}, Next: ${next}`);
  try {
    const data = getPhones();
    res.send({ data });
    return next();
  } catch (error) {
    log.error('ERROR: Method route get sources', error);
    throw error;
  }
};
