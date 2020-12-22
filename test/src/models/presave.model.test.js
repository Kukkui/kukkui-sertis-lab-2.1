// /* eslint-disable max-len */
// /* eslint-disable require-jsdoc */
// /* eslint-disable no-unused-vars */
// /* eslint-disable max-len */
// 'use strict';
// const assert = require('chai').assert;
// const proxyquire = require('proxyquire').noCallThru();
// const sinon = require('sinon');
// describe('presave.model test', ()=>{
//   let bcryptMock;
//   let psMock;
//   let mongooseSchemaStub;
//   let comparePassword;
//   let initPresaveModel;
//   let mongoose;
//   let pre;
//   let preMock;
//   let mongooseMock;
//   let isModified;
//   let methods;
//   let accounts;
//   let presaveModel;
//   let methodsStub;
//   let mongooseSchema;
//   let obj;
//   let next;
//   beforeEach(() => {
//     mongooseSchema = {};
//     pre = {};
//     psMock={};
//     next=sinon.stub();
//     methodsStub={};
//     obj={
//       isModified: sinon.stub(),
//     };
//     psMock={
//       isModified: sinon.stub(),
//     };
//     methodsStub = {
//       correctPassword: sinon.stub(),
//       comparePassword: sinon.stub(),
//       isModified: sinon.stub(),
//     };
//     mongooseMock = {
//       model: sinon.stub(),
//       Schema: sinon.stub().returns({
//         pre: sinon.stub(),
//         isModified: sinon.stub(),
//         methods: methodsStub,
//       }),
//     };
//     bcryptMock = {
//       hash: sinon.stub().resolves('000000000000'),
//       compare: sinon.stub().resolves(true),
//     };
//     initPresaveModel = () => {
//       presaveModel = proxyquire(
//           '../../../src/models/presave.model',
//           {
//             'bcryptjs': bcryptMock,
//             '../../src/models/presave.model': psMock,
//             // '../../src/models/auth.model': authMock,
//           });
//     };
//   });
//   afterEach(() => {
//   });
//   describe('.presave()', () => {
//     it('should work correctly with true conditions', async () => {
//       const candidatePassword = 'candidatePassword';
//       const password = '000000000000';
//       //   isModified.returns(true);
//       const cm=true;
//       const thx = {
//         _id: 0,
//         username: 'test',
//         password: 'test',
//       };
//       initPresaveModel();
//       assert.deepEqual(await presaveModel.ps(next), true);
//       // assert.deepEqual(bcryptMock.compare.args[0][0], password);
//     //   assert.deepEqual(bcryptMock.compare.args[0][1], password);
//     });
//     it('should work correctly with false conditions', async () => {
//       const candidatePassword = 'candidatePassword';
//       const password = '000000000000';
//       //   isModified.returns(true);
//       const cm=false;
//       const thx = {
//         _id: 0,
//         username: 'test',
//         password: 'test',
//       };
//       initPresaveModel();
//       assert.deepEqual(await presaveModel.ps(cm, thx), true);
//       //   assert.deepEqual(bcryptMock.compare.args[0][0], candidatePassword);
//       //   assert.deepEqual(bcryptMock.compare.args[0][1], password);
//     });
//   });
// });
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
'use strict';
const assert = require('chai').assert;
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
describe('presave.model test', ()=>{
  let bcryptMock;
  let mongooseSchema;
  let psMock;
  let mongooseSchemaStub;
  let comparePassword;
  let initPresaveModel;
  let mongoose;
  let next;
  let pre;
  let preMock;
  let mongooseMock;
  let isModified;
  let methods;
  let accounts;
  let presaveModel;
  let methodsStub;
  let thisx;
  let obj;
  beforeEach(() => {
    mongooseSchema = {};
    pre = {};
    psMock={};
    next={};
    methodsStub={};
    obj={
      isModified: sinon.stub(),
    };
    psMock={
      isModified: sinon.stub(),
    };
    methodsStub = {
      correctPassword: sinon.stub(),
      comparePassword: sinon.stub(),
      isModified: sinon.stub(),
    };
    mongooseMock = {
      model: sinon.stub(),
      Schema: sinon.stub().returns({
        pre: sinon.stub(),
        methods: methodsStub,
      }),
    };
    bcryptMock = {
      hash: sinon.stub().resolves('000000000000'),
      compare: sinon.stub().resolves(true),
    };
    initPresaveModel = () => {
      presaveModel = proxyquire(
          '../../../src/models/presave.model',
          {
            'bcryptjs': bcryptMock,
            '../../src/models/presave.model': psMock,
          });
    };
  });
  afterEach(() => {
  });
  describe('.presave()', () => {
    it('should work correctly with true conditions', async () => {
      const candidatePassword = 'candidatePassword';
      const password = '000000000000';
      //   isModified.returns(true);
      const next= function() {
        return false;
      };
      psMock.isModified.returns(false);
      obj.isModified.returns(false);
      obj.password = password;
      obj.passwordConfirm= undefined;
      initPresaveModel();
      assert.deepEqual(await presaveModel.preSaveFunc(next, obj), false);
    //   assert.deepEqual(bcryptMock.compare.args[0][0], candidatePassword);
    //   assert.deepEqual(bcryptMock.compare.args[0][1], password);
    });
    it('should work correctly with true conditions', async () => {
      const candidatePassword = 'candidatePassword';
      const password = '000000000000';
      //   isModified.returns(true);
      const next= function() {
        return true;
      };
      psMock.isModified.returns(true);
      obj.isModified.returns(true);
      methodsStub.password = password;
      initPresaveModel();
      assert.deepEqual(await presaveModel.preSaveFunc(next, obj), true);
    //   assert.deepEqual(bcryptMock.compare.args[0][0], candidatePassword);
    //   assert.deepEqual(bcryptMock.compare.args[0][1], password);
    });
  });
});
