'use strict';

module.exports.read = (event, context, callback) => {
  
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Read a single site.'
      }),
    };
  
    callback(null, response);
  };
