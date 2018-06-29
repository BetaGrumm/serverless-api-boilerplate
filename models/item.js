const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * Create a mongoose schema to define what a mongodb record should look like, and what
 * data should be stored/retrieved.
 * Schema types reference: http://mongoosejs.com/docs/schematypes.html
 */
const itemSchema = new Schema({
  itemFoo: String,
  itemBar: Number,
  itemSubObject: {
    subField: String
  }
},
{
  minimize: false,
  timestamps: true
});

/**
 * Create a global model based on the schema, and export it to be used in other files.
 * Using serverless-offline creates issues as one call will compile the schema, and then 
 * a consecutive call will attempt to recompile the model throwing an error. Using a
 * global model avoids this error.
 */
global.ItemSchema = global.ItemSchema || mongoose.model('Item', itemSchema);
module.exports = global.ItemSchema;
