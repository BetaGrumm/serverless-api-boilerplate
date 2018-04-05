'use strict';

module.exports.error404 = (event, context, callback) => {
  const response = {
    statusCode: 404,
    body: {
      title: 'Resource Not Found.',
      message: 'That is not valid path to a Sites API resource.',
      event: `${JSON.stringify(event)}`
    }
  };

  callback(null, response);
};

module.exports.error405 = (event, context, callback) => {
  const response = {
    statusCode: 405,
    body: JSON.stringify({
      title: 'Method not allowed.',
      message: 'That method is not allowed here.',
      event: `${JSON.stringify(event)}`
    })
  };

  callback(null, response);
};