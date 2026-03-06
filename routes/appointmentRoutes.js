const r=require("express").Router();
const auth=require("../middleware/authMiddleware");
const c=require("../controllers/appointmentController");

r.post("/",auth,c.create);
r.get("/",auth,c.list);

module.exports=r;