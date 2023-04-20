const StudentService = require("../services/StudentService");



class StudentsController {

    async getStudents(req, res, next){
        try {
            const userData = await StudentService.getStudents();
            res.json(userData);
        } catch (e) {
            next(e);
        }
    }
    async createStudent(req, res, next){
        try {
            await StudentService.registration(req.body);
            res.send('Student was created');
        } catch (e) {
            next(e);
        }
    }
    async updateStudentByName(req, res, next){
        try {
            await StudentService.updateStudent(req.body.name, req.body);
            res.send('Student was updated');
        } catch (e) {
            next(e);
        }
    }
    async deleteStudentByName(req, res, next){
        try {
            StudentService.deleteByName(req.query.name);
            res.send('Student was deleted')
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new StudentsController();