const mongoose = require('mongoose');
const SiteSchema = new mongoose.Schema({
    subdomain: String,
    anohterField: String
})

module.exports = mongoose.model('Site', SiteSchema);
