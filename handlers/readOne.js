'use strict';
const Site = require('../models/Site');

module.exports.read = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Site.findOne({ 'subdomain': 'demo' })
        .then(site => callback(null, {
          statusCode: 200,
          body: JSON.stringify(site)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: 'Could not fetch the site.'
        }))
    });
};
