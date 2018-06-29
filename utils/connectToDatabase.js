const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), 'vars.env') });
mongoose.Promise = global.Promise;
let isConnected;
let { ENV } = process.env;
console.log(`ENV: ${ENV}`);
let url;
switch (ENV) {
  case 'ci':
    url = 'mongodb://mongodb/items';
    break;
  default:
    url = 'mongodb://localhost/items';
}
module.exports = function connectToDatabase() {
  if (isConnected) {
    console.log('=> using existing database connection...');
    return Promise.resolve();
  }
  console.log('=> creating new database connection...');
  console.log(`Connection URL: ${url}`);
  return mongoose.connect(url)
    .then(db => {
      isConnected = db.connections[0].readyState;
    });
};
