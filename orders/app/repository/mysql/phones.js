const { squel, sqlify } = require('sqlify');
const log = require('../../config/log');

const createSQLQueryForGetPhones = () => {
  const query = squel.select()
    .from('phones');
  sqlify(query, {});
  return query.toString();
};

exports.getPhones = mysqlClient => async () => {
  log.debug('DEBUG: Method mysql get phones, INPUT - ');
  try {
    const query = createSQLQueryForGetPhones();
    const response = await mysqlClient.query(query);
    log.debug(`DEBUG: Method mysql get phones, OUTPUT - Response: ${JSON.stringify(response, null, 2)} `);
    return response;
  } catch (error) {
    log.error('ERROR: Method mysql get phones', error);
    throw error;
  }
};
