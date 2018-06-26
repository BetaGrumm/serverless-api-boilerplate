'use strict';

const Item = require('../models/item');
const { Validator } = require('jsonschema');
const { connectToDatabase, formatValidationErrors } = require('../utils');
const PostSchema = require('../schemas/PostSchema');
let v = new Validator();

module.exports.create = (event, context, callback) => {
  // validate request body
  let body = JSON.parse(event.body);
  let validationErrors = v.validate(body, PostSchema).errors;
  if (validationErrors.length > 0) {
    // invalid request body. Format errors and respond.
    let errorList = formatValidationErrors(validationErrors);
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'application/vnd.api+json' },
      body: {
        errors: errorList
      }
    });
  }

  // valid. Process request and respond.
  let attributes = body.data.attributes;
  // serialize for storage
  connectToDatabase()
    .then(() => {
      Item.create(attributes)
        .then(item => {
          // deserialize for resposne
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(item)
          });
        })
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/vnd.api+json' },
          body: 'Unable to create the item.'
        }));
    });
};
