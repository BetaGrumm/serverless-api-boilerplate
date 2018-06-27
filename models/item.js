const mongoose = require('mongoose');

/**
 * Create a mongoose schema to define what a mongodb record should look like, and what
 * data should be stored/retrieved.
 * Schema types reference: http://mongoosejs.com/docs/schematypes.html
 */
const ItemSchema = new mongoose.Schema({
  itemFoo: String,
  itemBar: Number
});

/**
 * Create a model based on the schema, and export it to be used in other files.
 */
module.exports = mongoose.model('Item', ItemSchema);
