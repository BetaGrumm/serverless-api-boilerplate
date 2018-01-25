'use strict';

module.exports.read = (event, context, callback) => {
  
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Read all Sites.'
      }),
    };
  
    callback(null, response);
};