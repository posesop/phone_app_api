const log = require('../../config/log');


exports.getPhones = phonesClient => async () => {
  log.debug('DEBUG: Method phones services get phones, INPUT -');

  try {
    const response = await phonesClient.get('phones');
    const result = response.data.data;
    log.debug(`DEBUG: Method phones services get phones, OUTPUT: OK - Response information: ${response}, return: ${result}`);
    return result;
  } catch (error) {
    log.error('ERROR: Method phones services get phones', error);
    throw error;
  }
};
