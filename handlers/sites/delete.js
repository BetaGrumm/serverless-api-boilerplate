'use strict';

module.exports.delete = (event, context, callback) => {
    
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Delete a Site.'
      }),
    };
  
    callback(null, response);
};