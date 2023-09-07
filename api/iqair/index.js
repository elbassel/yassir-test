const axios = require('axios');
const { baseApiUrl, iqAirKey } = require('../config');

module.exports.getAirQuality = async ({lat, lon}) => {
    const url = `${baseApiUrl}/v2/nearest_city?lat=${lat}&lon=${lon}&key=${iqAirKey}`;
    const response = await axios.get(url);
    return response.data;
}

