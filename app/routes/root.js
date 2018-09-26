exports.get = (req, res, next) => {
  const data = [{
    id: 'phones',
    link: {
      rel: 'phones',
      href: `http://${req.headers.host}/phones`,
    },
  }];
  res.send(data);
  return next();
};
