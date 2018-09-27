const orders = require('./orders');

exports.init = () => ({
  postOrder: orders.postOrder,
});
