'use strict';

module.exports = function formatValidationErrors(validation) {
  let errors = [];
  // Transpose each element of Validation.errors[] to the appropriate format
  errors = validation.map(error => {
    let message;
    // console.log(error);
    if (error.name === 'additionalProperties') {
      message = `'${error.argument}' is an invalid site attribute.`;
    } else {
      // Some formatting of the error messages.
      //   Example: need to replace "" with '' for better-looking JSON
      let errMsg = error.stack.replace(/"/g, "'"); // eslint-disable-line
      errMsg = errMsg.replace('instance.', '');
      message = `${errMsg}.`;
    }
    return ({
      satus: 400,
      title: 'Bad Request',
      detail: `Schema Validation Error: ${message}`
    });
  });
  return errors;
};
