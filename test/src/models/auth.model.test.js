/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
'use strict';
const assert = require('chai').assert;
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
describe('auth.model test', ()=>{
  let bcryptMock;
  let mongooseSchema;
  let mongooseSchemaStub;
  let comparePassword;
  let initAuthModel;
  let mongoose;
  let pre;
  let psMock;
  let preMock;
  let mongooseMock;
  let nextspy;
  let methods;
  let accounts;
  let authModel;
  let authMod;
  let methodsStub;
  let obj;
  let preSave;
  let preSaveStub;
  beforeEach(() => {
    mongooseSchema = {};
    pre = {};
    preSave={};
    obj={};
    methodsStub={};
    psMock={};
    authMod={};
    authModel={
      pre: sinon.stub(),
    };
    obj={
      isModified: sinon.stub(),
    };
    psMock={
      ps: sinon.stub(),
    };
    methodsStub = {
      correctPassword: sinon.stub(),
      comparePassword: sinon.stub(),
    };
    preSaveStub={
      isModified: sinon.stub(),
    };
    mongooseMock = {
      model: sinon.stub(),
      Schema: sinon.stub().returns({
        pre: sinon.stub(),
        methods: methodsStub,
        preSave: preSaveStub,
      }),
    };
    bcryptMock = {
      hash: sinon.stub().resolves('test'),
      compare: sinon.stub().resolves(true),
    };
    initAuthModel = () => {
      authModel = proxyquire(
          '../../../src/models/auth.model',
          {
            'mongoose': mongooseMock,
            'bcryptjs': bcryptMock,
            '../../src/models/auth.model': authMod,
            // './presave.model.js': psMock,
          });
    };
  });
  afterEach(() => {
  });
  describe('.correctPassword()', () => {
    it('should work correctly', async () => {
      const candidatePassword = 'candidatePassword';
      const tpassword = 'password';
      const opassword = 'password';
      // methodsStub.password = password;
      bcryptMock.compare.resolves(true);
      initAuthModel();
      assert.deepEqual(await methodsStub.correctPassword(tpassword, opassword), true);
      assert.deepEqual(bcryptMock.compare.args[0][0], tpassword);
      assert.deepEqual(bcryptMock.compare.args[0][1], opassword);
    });
  });
});
