'use strict';

module.exports.create = (event, context, callback) => {
  
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Create a Site.'
      }),
    };
  
    callback(null, response);
};