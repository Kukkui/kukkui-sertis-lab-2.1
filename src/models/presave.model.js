/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable no-invalid-this */
'use strict';
// const mongoose = require('mongoose');

const auth = require('../../src/models/presave.model');
const ps = require('../../src/models/presave.model');
const bcrypt = require('bcryptjs');
exports.preSaveFunc = async function(next, obj) {
  // console.log(this);
  if (!obj.isModified('password')) return next();
  obj.password= await bcrypt.hash(obj.password, 12);
  obj.passwordConfirm= undefined;
  next();
};
