const supertest = require("supertest");
const server = require("../../server");
const axios = require("axios");
const {originIQAirResponse, cityPollutionSample} = require("../data-samples");
const CityPollutionModel = require("../../db/models/cities-pollution");

jest.mock('axios');
const request = supertest(server);

afterAll(async () => {
    await server.close();
});

describe("GET /iqair/cities", () => {
    it('should return success response', async () => {
        axios.get.mockResolvedValue(originIQAirResponse);
        const response = await request.get('/iqair/cities?lat=48.856613&lon=2.352222')
            .set("content-type", "application/json");
        expect(response.body).toHaveProperty('Result');
        expect(response.body.Result).toHaveProperty('Pollution');

    });

    it('should return not found city', async () => {
        axios.get.mockImplementation(() => {
            throw notFoundCityResponse;
        });
        const response = await request.get('/iqair/cities?lat=1&lon=1')
            .set("content-type", "application/json");
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');

    });
});

describe('POST /iqair/cities', () => {

    it('should add entry to city pollution', async () => {
        axios.get.mockResolvedValue(originIQAirResponse);
        CityPollutionModel.create =  jest.fn(() => cityPollutionSample);
        const response = await request.post('/iqair/cities?lat=48.856613&lon=2.352222')
            .set("content-type", "application/json");
        expect(response.body).toHaveProperty('ts');
        expect(response.body).toHaveProperty('aqius');
        expect(response.body).toHaveProperty('mainus');
        expect(response.body).toHaveProperty('aqicn');
        expect(response.body).toHaveProperty('maincn');
    });

    it('should return not found city', async () => {
        axios.get.mockImplementation(() => {
            throw notFoundCityResponse;
        });
        const response = await request.post('/iqair/cities?lat=1&lon=1')
            .set("content-type", "application/json");
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');

    });
});