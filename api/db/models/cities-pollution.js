const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citiesPollutionSchema = new Schema({
    ts: Date,
    aqius: Number,
    mainus: String,
    aqicn: Number,
    maincn: String,
    city: String,
    state: String,
    country: String,
});

module.exports = mongoose.model("CitiesPollution", citiesPollutionSchema);