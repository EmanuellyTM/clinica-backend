const r=require("express").Router();
const auth=require("../middleware/authMiddleware");
const c=require("../controllers/appointmentController");

router.post("/", auth, createAppointment);
router.get("/", auth, listAppointments);
router.delete("/:id", auth, async (req, res) => {

  const Appointment = require("../models/Appointment");

  await Appointment.findByIdAndDelete(req.params.id);

  res.send("Consulta deletada");

});

module.exports=r;