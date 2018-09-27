const repository = require('../repository');
const log = require('../config/log');

exports.getPhones = async () => {
  log.debug('DEBUG: Method controller getPhones, INPUT - ');
  try {
    const result = await repository.getPhones();
    log.debug(`DEBUG: Method controller getPhones, OUTPUT - Result: ${JSON.stringify(result, null, 2)}`);
    return result;
  } catch (error) {
    log.error('ERROR: Method controller get phones', error);
    throw error;
  }
};
