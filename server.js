require("dotenv").config();
const express=require("express");
const cors=require("cors");
const db=require("./config/db");

db();

const app=express();
app.use(cors({
  origin: "https://zesty-choux-5f2e69.netlify.app"
}));
app.use(express.json());

app.use("/auth",require("./routes/authRoutes"));
app.use("/appointments",require("./routes/appointmentRoutes"));

app.listen(3000,()=>console.log("Rodando"));