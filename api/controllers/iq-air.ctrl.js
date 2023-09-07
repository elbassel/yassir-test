const express = require('express')
const { getCityAirQuality, saveCityAirQuality } = require('../services/iqair.service');
const router = express.Router();


router.get('/cities', async (req, res)=> {
    try {
        const { lat, lon } = req.query;
        const result = await getCityAirQuality({ lat, lon });
        res.json(result);
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
    }
);

router.post('/cities', async (req, res)=> {
    try {
        const { lat, lon } = req.query;
        const result = await saveCityAirQuality({ lat, lon });
        res.json(result);
    } catch (error) {
        res.status(400).send({error: error.toString()});
    }
    }
);

module.exports = router;
