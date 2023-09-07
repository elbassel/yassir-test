require('dotenv').config();

module.exports = {
    database: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/iqair',
    baseApiUrl: 'http://api.airvisual.com',
    iqAirKey: process.env.IQ_AIR_KEY,
}