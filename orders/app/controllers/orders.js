const repository = require('../repository');
const log = require('../config/log');

exports.postOrder = async (order) => {
  log.debug('DEBUG: Method controller postOrder, INPUT - ');
  try {
    const allPhones = await repository.getPhones();

    const phones = allPhones.filter(phone => order.phones.includes(phone.name));
    const price = phones.reduce((total, current) => total + current.price, 0);

    const result = {
      price,
      ...order,
      phones,
    };
    console.log(JSON.stringify(result, null, 2));
    log.debug(`DEBUG: Method controller postOrder, OUTPUT - Result: ${JSON.stringify(result, null, 2)}`);
    return result;
  } catch (error) {
    log.error('ERROR: Method controller get phones', error);
    throw error;
  }
};
