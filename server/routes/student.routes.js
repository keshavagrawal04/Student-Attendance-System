const router = require("express").Router();
const { studentController } = require("../controllers");

router.post("/add", studentController.studentAdd);
router.post("/attendance", studentController.studentAttendance);

module.exports = router;
