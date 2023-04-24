const Router = require('express').Router;
const StudentController = require('../controllers/StudentController.js');


const StudentsRounter = new Router('/');

StudentsRounter.get('/get-students', StudentController.getStudents);
StudentsRounter.post('/create-student', StudentController.createStudent);
StudentsRounter.put('/update-student-by-id', StudentController.updateStudentByid);
StudentsRounter.delete('/delete-student-by-id', StudentController.deleteStudentByid);

module.exports = StudentsRounter;