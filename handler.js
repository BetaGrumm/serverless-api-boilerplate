'use strict';

module.exports.readSites = (event, context, callback) => {
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Read all Sites.'
    }),
  };

  callback(null, response);
};

module.exports.readSite = (event, context, callback) => {
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Read a single site.'
    }),
  };

  callback(null, response);
};

module.exports.createSite = (event, context, callback) => {
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Create a Site.'
    }),
  };

  callback(null, response);
};

module.exports.updateSite = (event, context, callback) => {
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Update a Site.'
    }),
  };

  callback(null, response);
};

module.exports.deleteSite = (event, context, callback) => {
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Delete a Site.'
    }),
  };

  callback(null, response);
};