/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
'use strict';
const assert = require('chai').assert;
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
describe('user.model test', ()=>{
  let bcryptMock;
  let mongooseSchema;
  let mongooseSchemaStub;
  let initUserModel;
  let mongoose;
  let pre;
  let preMock;
  let mongooseMock;
  let nextspy;
  let methods;
  let accounts;
  let userModel;
  let methodsStub;
  beforeEach(() => {
    mongooseSchema = {};
    methodsStub = {};
    pre = {};
    mongooseSchemaStub = sinon.stub(mongooseSchema, 'constructor');
    nextspy = sinon.spy();
    methodsStub = {
      correctPassword: sinon.stub(),
      comparePassword: sinon.stub(),
    };
    mongooseMock = {
      model: sinon.stub(),
      Schema: sinon.stub().returns({
        pre: sinon.stub(),
        methods: methodsStub,
      }),
      methods: methodsStub,
    };
    bcryptMock = {
      hash: sinon.stub(),
      compare: sinon.stub(),
    };
    initUserModel = () => {
      userModel = proxyquire(
          '../../../src/models/user.model',
          {
            'mongoose': mongooseMock,
            'bcryptjs': bcryptMock,
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
      initUserModel();
      assert.deepEqual(await methodsStub.correctPassword(tpassword, opassword), true);
      assert.deepEqual(bcryptMock.compare.args[0][0], tpassword);
      assert.deepEqual(bcryptMock.compare.args[0][1], opassword);
    });
  });
});
