'use strict';
const connectToDatabase = require('../../utils/db');
const Site = require('../models/Site');
require('dotenv').config();

module.exports.read = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log('event: ' + event);
  callback(null, { statusCode: 200, body: JSON.stringify(event) });
  // connectToDatabase()
  //   .then(() => {
  //     Site.findOne({ 'subdomain': 'demo' })
  //       .then(site => callback(null, {
  //         statusCode: 200,
  //         body: JSON.stringify(site)
  //       }))
  //       .catch(err => callback(null, {
  //         statusCode: err.statusCode || 500,
  //         headers: { 'Content-Type': 'application/json' },
  //         body: 'Could not fetch the site.'
  //       }))
  //   });
};
