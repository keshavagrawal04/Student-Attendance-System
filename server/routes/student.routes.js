const router = require("express").Router();
const { studentController } = require("../controllers");

router.post("/add", studentController.studentAdd);
router.post("/attendance", studentController.studentAttendance);
router.get("/get", studentController.getStudents);

module.exports = router;
