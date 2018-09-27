const sinon = require('sinon');
const { get } = require('../../app/routes/root');


describe('Unit test for root route', () => {
  const req = {
    headers: {
      host: 'myhost:9000',
    },
  };
  const next = sinon.stub();
  const res = {
    send: sinon.stub(),
  };

  it('should call send root data and call next', () => {
    get(req, res, next);
    const data = [{
      id: 'phones',
      link: {
        rel: 'phones',
        href: `http://${req.headers.host}/phones`,
      },
    }, {
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
    },
    ];
    sinon.assert.calledWith(res.send, data);
    sinon.assert.called(next);
  });
});
