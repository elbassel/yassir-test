const { API } = require('./config');
const LAT = 48.856613;
const LON = 2.352222;

setInterval(()=> {
    fetch(`${API}/iqair/cities?lat=${LAT}&lon=${LON}`, {
        method: 'POST',
    });
}, 6000);
