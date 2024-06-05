const { studentService } = require("../services");

const studentAdd = async (req, res) => {
  try {
    const student = await studentService.saveStudent(req.body);
    res.status(201).json({ message: "Student added successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

const studentAttendance = async (req, res) => {
  const { aadhaarNumber } = req.body;
  const today = new Date();

  try {
    const student = await studentService.findByAadhaarNumber(aadhaarNumber);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const existingAttendance = student.attendance.find(
      (day) =>
        day.date.toISOString().slice(0, 10) === today.toISOString().slice(0, 10)
    );

    if (existingAttendance) {
      return res
        .status(400)
        .json({ message: "Student already marked present today" });
    }

    student.attendance.push({ date: today, present: true });
    await student.save();

    res.status(200).json({
      message: "Attendance marked successfully",
      student: student.fullName,
    });
  } catch (err) {
    console.error("Error marking attendance:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { studentAdd, studentAttendance };
