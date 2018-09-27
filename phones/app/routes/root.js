exports.get = (req, res, next) => {
  const data = [{
    id: 'phones',
    link: {
      rel: 'phones',
      href: `http://${req.headers.host}/phones`,
    },
  }, {
    id: 'docs',
    link: {
      rel: '_docs',
      href: `http://${req.headers.host}/_docs`,
    },
  }];
  res.send(data);
  return next();
};
