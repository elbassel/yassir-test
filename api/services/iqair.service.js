const { getAirQuality } = require('../iqair');
const CityPollution  = require('../db/models/cities-pollution');

module.exports.getCityAirQuality = async ({ lat, lon }) => {

        const data = await getAirQuality({ lat, lon });
        const { current: { pollution } } = data.data;
        return {
            Result: {
                Pollution: { ...pollution }
            }
        }
}


module.exports.saveCityAirQuality = async ({ lat, lon }) => {
        const result = await getAirQuality({ lat, lon });
        const { current: { pollution }, city, state, country } = result.data;
        return CityPollution.create({...pollution, city, state, country});

}
