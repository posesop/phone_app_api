const phones = require('./phones');

exports.init = () => ({
  getPhones: phones.getPhones,
});
