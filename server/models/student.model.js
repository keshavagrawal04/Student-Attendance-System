const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  present: {
    type: Boolean,
    default: false,
  },
});

const studentSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  aadhaarNumber: { type: String, required: true, unique: true },
  subject: { type: String, required: true },
  attendance: {
    type: [attendanceSchema],
    default: [],
  },
});

module.exports = mongoose.model("Student", studentSchema);
