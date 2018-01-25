'use strict';

module.exports.update = (event, context, callback) => {
    
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Update a Site.'
      }),
    };
  
    callback(null, response);
};