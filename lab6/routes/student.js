const Router = require('express').Router;
const StudentController = require('../controllers/StudentController.js');


const StudentsRounter = new Router('/');

StudentsRounter.get('/get-students', StudentController.getStudents);
StudentsRounter.post('/create-student', StudentController.createStudent);
StudentsRounter.put('/update-student-by-surname', StudentController.deleteStudentByName);
StudentsRounter.delete('/delete-student-by-id', StudentController.deleteStudentByName);

module.exports = StudentsRounter;