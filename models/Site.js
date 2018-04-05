const mongoose = require('mongoose');
const SiteSchema = new mongoose.Schema({
    subdomain: String,
    anohterField: String
})
const connectToDatabase = require('../../utils/db');

module.exports = mongoose.model('Site', SiteSchema);
