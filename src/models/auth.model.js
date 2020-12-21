/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable no-invalid-this */
'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const ps = require('../../src/models/presave.model');
const authMod = require('../../src/models/auth.model');
const accounts = mongoose.Schema({
  username: String,
  password: String,
});
// const cm =
accounts.pre('save', async function(next) {
  await ps.preSaveFunc(next, this);
});

accounts.methods.correctPassword = async function(
    typedPassword,
    originalPassword,
) {
  return await bcrypt.compare(typedPassword, originalPassword);
};

module.exports = mongoose.model('Auth', accounts);
