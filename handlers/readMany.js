'use strict';
const connectToDatabase = require('../utils/db');
const Site = require('../models/Site');
require('dotenv').config();

module.exports.read = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  // connectToDatabase()
  //   .then(() => {
  //     Site.find()
  //       .then(sites => callback(null, {
  //         statusCode: 200,
  //         body: { data: [JSON.stringify(sites)] }
  //       }))
  //       .catch(err => callback(null, {
  //         statusCode: err.statusCode || 500,
  //         headers: { 'Content-Type': 'application/json' },
  //         body: 'Could not fetch the sites.'
  //       }))
  //   });
  callback(null, { body: { data: [] } })
};