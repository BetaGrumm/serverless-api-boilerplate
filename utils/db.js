const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
    if (isConnected) {
        console.log('=> using existing database connection...');
        return Promise.resolve();
    }

    console.log('=> creating new database connection...');
    console.log('Connection String: ' + process.env.DB);
    return mongoose.connect(process.env.DB)
        .then(db => {
            isConnected = db.connections[0].readyState;
        });
};
