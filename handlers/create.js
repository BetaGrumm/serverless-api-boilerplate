'use strict';

const Item = require('../models/item');
const connectToDatabase = require('../utils/db');

module.exports.create = (event, context, callback) => {
  let attributes = JSON.parse(event.body).data.attributes;
  console.log(`attributes: ${attributes}`);
  connectToDatabase()
  .then(() => {
    Item.create(attributes)
      .then(item => callback(null, {
        statusCode: 200,
        body: JSON.stringify(item)
      }))
      .catch(err => callback(null, {
        statusCode: err.statusCode || 500,
        headers: { 'Content-Type': 'application/json' },
        body: 'Unable to create the item.'
      }))
  });
};