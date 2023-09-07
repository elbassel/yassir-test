const axios= require('axios');

const CityPollutionModel = require('../../db/models/cities-pollution');
const { getCityAirQuality, saveCityAirQuality } = require('../../services/iqair.service');
const {cityPollutionSample, originIQAirResponse, notFoundCityResponse} = require("../data-samples");

jest.mock('axios');

describe('test iqair service', () => {
    beforeEach(() => {

    });
    describe('test getCityAirQuality', () => {
        it('should get error city not found', async () => {
            try {
                axios.get.mockImplementation(() => {
                    throw notFoundCityResponse;
                });
                const lat = 1;
                const lon = 1;
                await getCityAirQuality({ lat, lon });
            } catch (error) {
                const {response: {status, data: {data: {message}}}} = error;
                expect(status).toBe(400);
                expect(message).toBe('city_not_found');
            }
        });
        it('should get city pollution from iqair', async () => {
            axios.get.mockResolvedValue(originIQAirResponse);
            const lon=20.352222;
            const lat=48.856613
            const result = await getCityAirQuality({ lat, lon });
            expect(result).toBeDefined();
            expect(result).toHaveProperty('Result');
            expect(result.Result).toHaveProperty('Pollution');
        });
    });
    describe('test saveCityAirQuality', () => {
        beforeEach(() => {
            CityPollutionModel.create =  jest.fn(() => cityPollutionSample);
            axios.get.mockResolvedValue(originIQAirResponse);
        });
        it('should save city pollution from iqair', async () => {
              const lon=20.352222;
                const lat=48.856613;
                const result = await saveCityAirQuality({ lat, lon });
                expect(result).toHaveProperty('ts');
                expect(result).toHaveProperty('aqius');
                expect(result).toHaveProperty('mainus');
                expect(result).toHaveProperty('aqicn');
                expect(result).toHaveProperty('maincn');
        });

        it('should throw error city not found', async () => {
            try {
                axios.get.mockImplementation(() => {
                    throw notFoundCityResponse;
                });
                const lat = 1;
                const lon = 1;
                await saveCityAirQuality({ lat, lon });
            } catch (error) {
                const {response: {status, data: {data: {message}}}} = error;
                expect(status).toBe(400);
                expect(message).toBe('city_not_found');
            }
        });
    });
})
