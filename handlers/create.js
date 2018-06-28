'use strict';

const {
  connectToDatabase,
  formatValidationErrors,
  serializer,
  deserializer
} = require('../utils');
const Item = require('../models/item');
const PostSchema = require('../schemas/PostSchema');
const { Validator } = require('jsonschema');
var v = new Validator();

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
  // deserialize for storage
  deserializer.deserialize(body)
    .then(attributes => {
      console.log(`deserialized attributes: ${JSON.stringify(attributes)}`);
      connectToDatabase()
        .then(() => Item.create(attributes))
        .then(createdRecord => {
          console.log(`createdRecord: ${createdRecord}`);
          // serialize for resposne
          let responseBody = serializer.serialize(createdRecord.toObject());
          console.log(`serialized: ${JSON.stringify(responseBody)}`);
          callback(null, {
            statusCode: 200,
            headers: { 'Content-Type': 'application/vnd.api+json' },
            body: JSON.stringify(responseBody)
          });
        })
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/vnd.api+json' },
          body: {
            error: {
              status: 500,
              title: 'Internal Database Error',
              detail: `An internal database error occurred: ${err.message}`
            }
          }
        }));
    });
};
