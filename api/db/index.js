const mongoose = require("mongoose");
const {database} = require("../config");
console.log('===========');
console.log(database);
module.exports.init = ()=> {
    // if not in test mode, connect to mongodb
    if (process.env.NODE_ENV !== 'test') {
        // mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/iqair')
        //     .then(() => console.log('Connected To MongoDB'));
        mongoose.connect(database)
            .then(() => console.log('Connected To MongoDB'));
    }
}