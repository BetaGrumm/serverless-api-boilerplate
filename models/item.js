const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    subdomain: String,
    anotherField: String
});

module.exports = mongoose.model('Item', ItemSchema);
