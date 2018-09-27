const sinon = require('sinon');
const assert = require('assert');
const restify = require('restify');
const healthRouterFactory = require('restify-health-router');
const server = require('../server');
const config = require('../app/config/config');
const routes = require('../app/routes');


describe('Unit test for server', () => {
  let createServerStub;
  let addRoutesToStub;
  let restifyServerMock;
  let restifyPluginsStub;
  let healthRouterFactoryStub;
  let healthObj;

  beforeEach(() => {
    createServerStub = sinon.stub(restify, 'createServer');
    restifyPluginsStub = sinon.stub(restify.plugins, 'auditLogger');
    restifyServerMock = {
      pre: () => {},
      on: () => {},
      use: () => {},
    };
    createServerStub.returns(restifyServerMock);
    addRoutesToStub = sinon.stub(routes, 'addRoutesTo');
    healthRouterFactoryStub = sinon.stub(healthRouterFactory, 'create');
    healthObj = {
      applyRoutes: sinon.stub(),
    };
    healthRouterFactoryStub.returns(healthObj);
  });

  afterEach(() => {
    createServerStub.restore();
    addRoutesToStub.restore();
    restifyPluginsStub.restore();
    healthRouterFactoryStub.restore();
  });

  describe('init()', () => {
    it('should call createServer', () => {
      server.init();
      sinon.assert.calledOnce(createServerStub);
    });

    it('should call createServer with name and config name from config', () => {
      server.init();
      sinon.assert.calledWith(createServerStub, {
        name: config.name,
      });
    });

    it('should call routes.addRoutesTo', () => {
      server.init();
      sinon.assert.calledOnce(addRoutesToStub);
    });

    it('should call routes.addRoutesTo with the server returned by restify', () => {
      server.init();
      sinon.assert.calledWith(addRoutesToStub, restifyServerMock);
    });

    it('should call healthRouter with the server returned by restify', () => {
      const HEALTH_OPTIONS = {
        successMessage: 'I\'m alive, for now...',
      };
      server.init();
      sinon.assert.calledWith(healthRouterFactoryStub, HEALTH_OPTIONS);
      sinon.assert.calledWith(healthObj.applyRoutes, restifyServerMock);
    });

    it('should return the server returned by restify', () => {
      const returnedServer = server.init();
      assert.equal(returnedServer, restifyServerMock);
    });
  });
});
