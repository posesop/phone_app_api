const phones = require('./phones');
const orders = require('./orders');

exports.init = () => ({
  getPhones: phones.getPhones,
  postOrder: orders.postOrder,
});
