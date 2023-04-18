const Router = require('express').Router;
const StudentController = require('../controllers/StudentController.js');


const StudentsRounter = new Router('/students');

StudentsRounter.get('/get-students', StudentController.getStudents);
StudentsRounter.post('/create-student', StudentController.createStudent);
StudentsRounter.put('/update-user-by-id', StudentController.updateStudentById);
StudentsRounter.delete('/delete-student-by-id', StudentController.deleteStudentById);

module.exports = StudentsRounter;