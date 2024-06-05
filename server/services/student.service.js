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

const findAllStudents = async () => {
  try {
    const students = await Student.find({});
    return students;
  } catch (error) {
    throw error;
  }
};

module.exports = { saveStudent, findByAadhaarNumber, findAllStudents };
