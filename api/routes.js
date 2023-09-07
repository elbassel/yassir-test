const iqAirCtrl = require('./controllers/iq-air.ctrl');

module.exports.init = (app)=> {
    app.use('/iqair', iqAirCtrl);
}