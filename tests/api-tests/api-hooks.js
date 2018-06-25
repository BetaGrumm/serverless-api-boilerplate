'use strict';
// required packages
const hooks = require('hooks');
const before = hooks.before;
const after = hooks.after;

before('Items Collection > Create a Single Item', function (transaction, done) {
    transaction.skip = true;
    done();
});