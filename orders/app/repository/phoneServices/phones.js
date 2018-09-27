const log = require('../../config/log');


exports.getPhones = phonesClient => async () => {
  log.debug('DEBUG: Method get event proxy request, INPUT -');

  try {
    const response = await phonesClient.get('phones');
    const result = response.data;
    log.debug(`DEBUG: Method get event proxy request, OUTPUT: OK - Response information: ${response}, return: ${result}`);
    return result;
  } catch (error) {
    log.error('ERROR: Method get event proxy request', error);
    throw error;
  }
};
