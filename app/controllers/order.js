const repository = require('../repository');
const log = require('../config/log');

exports.postOrder = async (order) => {
  log.debug('DEBUG: Method controller postOrder, INPUT - ');
  try {
    const phones = await repository.getPhones();
    const price = order.phones.reduce((tot, act) => {
      const phoneOrder = phones.find(phone => phone.name === act.name);
      return phoneOrder ? tot + phoneOrder.price : 0;
    }, 0);
    log.debug(`DEBUG: Method controller postOrder, OUTPUT - Result: ${JSON.stringify(price, null, 2)}`);
    return { price };
  } catch (error) {
    log.error('ERROR: Method controller get phones', error);
    throw error;
  }
};
