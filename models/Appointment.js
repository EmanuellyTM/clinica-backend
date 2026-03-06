const mongoose = require("mongoose");

module.exports = mongoose.model("Appointment", new mongoose.Schema({
 patient:String,
 date:String,
 cep:String,
 address:String,
 rainForecast:Boolean
}));