const JSONAPISerializer = require('jsonapi-serializer').Serializer;

var itemSerializer = new JSONAPISerializer('item', {
  attributes: [
    'foo',
    'bar'
  ],
  pluralizeType: false
});

module.exports = itemSerializer;
