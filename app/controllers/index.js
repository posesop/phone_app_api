const phones = require('./phones');
const order = require('./order');

exports.init = () => ({
  getPhones: phones.getPhones,
  postOrder: order.postOrder,
});
