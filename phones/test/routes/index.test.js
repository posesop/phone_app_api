const { expect } = require('chai');
const sinon = require('sinon');
const routes = require('../../app/routes');
const root = require('../../app/routes/root');
const phones = require('../../app/routes/phones');
const docs = require('../../app/routes/docs');

describe('Unit test for routes', () => {
  let serverMock;
  beforeEach(() => {
    serverMock = {
      get: sinon.stub(),
      post: sinon.stub(),
    };
  });

  describe('addRoutesTo()', () => {
    const checkError = (server, router, controller, message) => {
      let err;
      try {
        routes.addRoutesTo(server, router, controller);
      } catch (error) {
        err = error;
      }
      expect(err.message).to.eql(message);
    };

    it('should fail when there is no server param', () => {
      checkError(null, null, null, 'No router, server or controller');
    });

    it('should fail when there is no router param', () => {
      checkError(serverMock, null, null, 'No router, server or controller');
    });

    it('should fail when there is no controller param', () => {
      checkError(serverMock, {}, null, 'No router, server or controller');
    });
  });

  describe('addRoutesTo(server, router, controller)', () => {
    let router;
    let controller;
    let bodyValidatorStub;

    beforeEach(() => {
      router = {
        use: sinon.stub(),
        get: sinon.stub(),
        post: sinon.stub(),
        applyRoutes: sinon.stub(),
      };
      controller = {
        getPhones: () => {},
        postOrder: () => {},
      };
    });

    it('should call use from router', () => {
      routes.addRoutesTo(serverMock, router, controller);
      sinon.assert.called(router.use);
    });

    it('should call applyRoutes from router', () => {
      routes.addRoutesTo(serverMock, router, controller);
      sinon.assert.calledWith(router.applyRoutes, serverMock);
    });

    it('should add the root route', () => {
      const rootGetStub = sinon.stub(root, 'get');
      routes.addRoutesTo(serverMock, router, controller);
      sinon.assert.calledWith(router.get, '/', rootGetStub);
    });

    it('should add the docs route', () => {
      const docsGetStub = sinon.stub(docs, 'get');
      routes.addRoutesTo(serverMock, router, controller);
      sinon.assert.calledWith(router.get, '/_docs', docsGetStub);
    });

    it('should add the phones get route', () => {
      const phonesGetStub = sinon.stub(phones, 'get');
      routes.addRoutesTo(serverMock, router, controller);
      sinon.assert.calledWith(phonesGetStub, controller.getPhones);
      sinon.assert.calledWith(
        router.get,
        '/phones',
        phonesGetStub(),
      );
    });
  });
});
