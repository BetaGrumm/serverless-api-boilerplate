const { Serializer } = require('jsonapi-serializer');

var serializer = new Serializer('item', {
  attributes: [
    'itemFoo',
    'itemBar',
    'itemSubObject'
  ],
  pluralizeType: false
});

module.exports = serializer;
