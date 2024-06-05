const { Student } = require("../models");

const saveStudent = async (body) => {
  try {
    let student = await Student(body);
    student = await student.save();
    return student;
  } catch (error) {
    throw error;
  }
};

const findByAadhaarNumber = async (aadhaarNumber) => {
  try {
    const student = await Student.findOne({ aadhaarNumber }, { __v: 0 });
    return student;
  } catch (error) {
    throw error;
  }
};

module.exports = { saveStudent, findByAadhaarNumber };
