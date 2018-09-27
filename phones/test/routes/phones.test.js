const sinon = require('sinon');
const errors = require('restify-errors');
const { get } = require('../../app/routes/phones');
const log = require('../../app/config/log');

describe('Unit test for phones route', () => {
  describe('tests for get method', () => {
    const next = sinon.stub();
    const res = {
      send: sinon.stub(),
      header: sinon.stub(),
    };
    let logStub;
    let internalErrorStub;

    beforeEach(() => {
      internalErrorStub = sinon.stub(errors, 'InternalError');
      logStub = sinon.stub(log, 'error');
      logStub.returns({});
    });

    afterEach(() => {
      logStub.restore();
      internalErrorStub.restore();
    });

    it('should catch and call next with Internal error if controller throws error', async () => {
      const req = {};
      const error = new Error('random error');
      const getPhones = () => {
        throw error;
      };

      await get(getPhones)(req, res, next);

      sinon.assert.calledWith(internalErrorStub, 'oh noes!');
      sinon.assert.called(next);
    });

    it('should send data if array with items from controller', async () => {
      const req = {};
      const data = ['mydata'];
      const getPhones = () => data;

      await get(getPhones)(req, res, next);

      sinon.assert.calledWith(res.send, {
        data,
      });
      sinon.assert.called(next);
    });
  });
});
