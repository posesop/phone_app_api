exports.get = (req, res, next) => {
  const data = [{
    id: 'orders',
    link: {
      rel: 'orders',
      href: `http://${req.headers.host}/orders`,
    },
  },
  {
    id: 'docs',
    link: {
      rel: '_docs',
      href: `http://${req.headers.host}/_docs`,
    },
  }];
  res.send(data);
  return next();
};
