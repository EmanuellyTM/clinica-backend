const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const Appointment = require("../models/Appointment");
const { createAppointment, list } = require("../controllers/appointmentController");

router.post("/", auth, createAppointment);

router.get("/", auth, list);

router.delete("/:id", auth, async (req, res) => {

  await Appointment.findByIdAndDelete(req.params.id);

  res.send("Consulta deletada");

});

module.exports = router;