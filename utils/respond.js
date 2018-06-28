'use strict';

/**
 * This function wraps AWS lambda's callback() function and collects repeated things like
 * headers and format in one place for cleaner response code elsewhere.
 * @param {object} serializedResponse - A JSON API formatted response object that will be
 * the body of the response.
 * @param {function} callback - the aws lambda callback function recieved with the request
 * event
 */
function respond(serializedResponse, callback) {
  callback(null, {
    statusCode: serializedResponse.status,
    headers: { 'Content-Type': 'application/vnd.api+json' },
    body: JSON.stringify(serializedResponse)
  });
}

module.exports = respond;
