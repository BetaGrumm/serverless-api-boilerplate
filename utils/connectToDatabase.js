const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), 'vars.env') });
mongoose.Promise = global.Promise;
let isConnected;

module.exports = function connectToDatabase() {
  if (isConnected) {
    console.log('=> using existing database connection...');
    return Promise.resolve();
  }
  console.log('=> creating new database connection...');
  let { DB_URL } = process.env;
  console.log(`Connection URL: ${DB_URL}`);
  return mongoose.connect(DB_URL)
    .then(db => {
      //isConnected = db.connections[0].readyState;
      isConnected = mongoose.connection.readyState;
    });
};
