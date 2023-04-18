const StudentService = require("../services/StudentService");


class StudentsController {

    async getStudents(req, res, next){
        try {
            const userData = StudentService.getStudents();
            res.send(userData);
        } catch (e) {
            next(e);
        }
    }
    async createStudent(req, res, next){
        try {
            
        } catch (e) {
            next(e);
        }
    }
    async updateStudentById(req, res, next){
        try {

        } catch (e) {
            next(e);
        }
    }
    async deleteStudentById(req, res, next){
        try {

        } catch (e) {
            next(e);
        }
    }
}

module.exports = new StudentsController();