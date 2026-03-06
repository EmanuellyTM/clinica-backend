require("dotenv").config();
const express=require("express");
const cors=require("cors");
const db=require("./config/db");

db();

const app=express();
app.use(cors());
app.use(express.json());

app.use("/auth",require("./routes/authRoutes"));
app.use("/appointments",require("./routes/appointmentRoutes"));

app.listen(3000,()=>console.log("Rodando"));