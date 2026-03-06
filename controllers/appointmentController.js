const axios=require("axios");
const Appointment=require("../models/Appointment");

exports.create=async(req,res)=>{

 const cep=await axios.get(
  `https://viacep.com.br/ws/${req.body.cep}/json/`
 );

 const city=cep.data.localidade;

 const weather=await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}`
 );

 const rain=weather.data.weather[0].main==="Rain";

 const appt=new Appointment({
  patient:req.user.id,
  date:req.body.date,
  cep:req.body.cep,
  address:cep.data.logradouro,
  rainForecast:rain
 });

 await appt.save();
 res.send(appt);
};

exports.list=async(req,res)=>{
 const list=await Appointment.find();
 res.send(list);
};