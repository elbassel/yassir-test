const cityPollutionSample = {
    "ts": "2023-09-07T08:00:00.000Z",
    "aqius": 54,
    "mainus": "p2",
    "aqicn": 37,
    "maincn": "n2",
    "_id": "64f991b23eaee597b167abab",
    "__v": 0
};

const originIQAirResponse = {
    "status": "success",
    data: { "data": {
            "city": "Dobsina",
            "state": "Kosice",
            "country": "Slovakia",
            "location": {
                "type": "Point",
                "coordinates": [
                    20.36988,
                    48.82073
                ]
            },
            "current": {
                "pollution": {
                    "ts": "2023-09-07T06:00:00.000Z",
                    "aqius": 34,
                    "mainus": "p2",
                    "aqicn": 12,
                    "maincn": "p2"
                },
                "weather": {
                    "ts": "2023-09-07T08:00:00.000Z",
                    "tp": 18,
                    "pr": 1025,
                    "hu": 58,
                    "ws": 1.5,
                    "wd": 51,
                    "ic": "01d"
                }
            }
        } }
}

const notFoundCityResponse = {
    response: {
        status: 400,
        data: {
            "status": "fail",
            "data": {
                "message": "city_not_found"
            }
        }
    }

}

module.exports =   {
    cityPollutionSample,
    originIQAirResponse,
    notFoundCityResponse
}