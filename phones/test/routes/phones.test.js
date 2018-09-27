const sinon = require('sinon');
const { get } = require('../../app/routes/phones');
const log = require('../../app/config/log');

describe('Unit test for phones route', () => {
  describe('tests for post method', () => {
    const next = sinon.stub();
    const res = {
      send: sinon.stub(),
      header: sinon.stub(),
    };
    let checkErrorStub;
    let logStub;

    beforeEach(() => {
      logStub = sinon.stub(log, 'error');
      logStub.returns({});
    });

    afterEach(() => {
      checkErrorStub.restore();
      logStub.restore();
    });

    it('should catch and check error if error is thrown', async () => {
      const req = {
        params: {
          categoryId: 'cate',
          classificationId: 'class',
          eventId: 'eve',
        },
        body: {
          name: 'name',
        },
      };
      const error = new Error('random error');
      const postSources = () => {
        throw error;
      };
      await post(postSources)(req, res, next);
      sinon.assert.calledWith(checkErrorStub, next, error, req);
    });

    it('should call next and send', async () => {
      const data = {
        name: 'sourceName',
        repository: 'https://myrepolink',
      };
      const req = {
        body: {
          name: 'sourceName',
        },
        path: () => '/href/link',
        headers: {
          host: 'myhost:9000',
        },
        url: '/url/test',
        params: {
          categoryId: 'cate',
          classificationId: 'class',
          eventId: 'eve',
        },
      };
      const sourceData = {
        name: 'sourceName',
        repository: 'https://myrepolink',
      };
      const postSources = () => sourceData;

      await post(postSources)(req, res, next);

      sinon.assert.calledWith(res.send, 201, {
        data,
      });
      sinon.assert.called(next);
    });
  });

  describe('tests for get method', () => {
    const next = sinon.stub();
    const res = {
      send: sinon.stub(),
      header: sinon.stub(),
    };
    let checkErrorStub;
    let logStub;

    beforeEach(() => {
      checkErrorStub = sinon.stub(restErrors, 'checkError');
      logStub = sinon.stub(log, 'error');
      logStub.returns({});
    });

    afterEach(() => {
      checkErrorStub.restore();
      logStub.restore();
    });

    it('should catch and check error if error is thrown', async () => {
      const req = {};
      const error = new Error('random error');
      const getSources = () => {
        throw error;
      };

      await get(getSources)(req, res, next);

      sinon.assert.calledWith(checkErrorStub, next, error);
    });

    it('should send data if array with items from controller', async () => {
      const req = {
        query: {
          repository: 'repoUrl',
        },
      };
      const data = ['mydata'];
      const getSources = () => data;

      await get(getSources)(req, res, next);

      sinon.assert.calledWith(res.send, {
        data,
      });
      sinon.assert.called(next);
    });

    it('should send 204 if empty array from controller', async () => {
      const req = {};
      const getSources = () => [];

      await get(getSources)(req, res, next);

      sinon.assert.calledWith(res.send, 204);
      sinon.assert.called(next);
    });

    it('should send 204 if object response from controller', async () => {
      const req = {};
      const getSources = () => {};

      await get(getSources)(req, res, next);

      sinon.assert.calledWith(res.send, 204);
      sinon.assert.called(next);
    });
  });
});
