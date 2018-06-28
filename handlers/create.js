'use strict';

const {
  connectToDatabase,
  formatValidationErrors,
  serializer,
  deserializer,
  errorSerializer
} = require('../utils');
const Item = require('../models/item');
const PostSchema = require('../schemas/PostSchema');
const { Validator } = require('jsonschema');
const v = new Validator();

module.exports.create = (event, context, callback) => {
  // validate request body
  const body = JSON.parse(event.body);
  const validationErrors = v.validate(body, PostSchema).errors;
  if (validationErrors.length > 0) {
    // invalid request body. Format errors and respond.
    let errorList = formatValidationErrors(validationErrors);
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'application/vnd.api+json' },
      body: errorSerializer(errorList)
    });
  }
  // valid. Process request and respond.
  // deserialize for storage
  deserializer.deserialize(body)
    .then(attributes => {
      connectToDatabase()
        .then(() => Item.create(attributes))
        .then(createdRecord => {
          // serialize and respond
          callback(null, {
            statusCode: 200,
            headers: { 'Content-Type': 'application/vnd.api+json' },
            body: JSON.stringify(serializer.serialize(createdRecord.toObject()))
          });
        })
        .catch(err => callback(null, {
          statusCode: 500,
          headers: { 'Content-Type': 'application/vnd.api+json' },
          body: errorSerializer({
            status: 500,
            title: 'Internal Server Error',
            detail: `An internal server error occurred: ${err.message}`
          })
        }));
    });
};
