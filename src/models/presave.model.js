/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable no-invalid-this */
'use strict';
// const mongoose = require('mongoose');

const auth = require('../../src/models/presave.model');
const ps = require('../../src/models/presave.model');
const bcrypt = require('bcryptjs');
exports.ps = async function(next) {
  // console.log(this);
  this.password= await bcrypt.hash(this.password, 12);
  this.passwordConfirm= undefined;
  return await true;
};
