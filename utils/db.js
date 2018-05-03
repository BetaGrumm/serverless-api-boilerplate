const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'vars.env')});
let isConnected;

// module.exports = connectToDatabase = () => {
//     if (isConnected) {
//         console.log('=> using existing database connection...');
//         return Promise.resolve();
//     }
//     console.log('=> creating new database connection...');
//     let uri = process.env.DB_URI
//     console.log("URI " + uri);
//     return mongoose.connect(uri)
//         .then(db => {
//             isConnected = db.connections[0].readyState;
//         });
// };
