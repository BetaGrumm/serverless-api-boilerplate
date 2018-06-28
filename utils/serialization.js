const { Serializer, Deserializer } = require('jsonapi-serializer');
const JSONAPIError = require('jsonapi-serializer').Error;

const serializer = new Serializer('item', {
  attributes: [
    'itemFoo',
    'itemBar',
    'itemSubObject'
  ],
  pluralizeType: false
});

const deserializer = new Deserializer({keyForAttribute: 'camelCase'});

/**
 * This funciton wraps the error serializer from jsonapi-serializer to make it more
 * consistent in use with the other features: serializer and deserializer.
 * @param {object} error - An object containing the status, title, and detail of the error
 * message
 * @returns {object} - A JSONAPI serialized object for repsonse. 
 */
const errorSerializer = (error) => {
  return new JSONAPIError(error);
};

module.exports = {
  serializer,
  deserializer,
  errorSerializer
};
