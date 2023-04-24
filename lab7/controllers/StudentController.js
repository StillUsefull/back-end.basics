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
    async updateStudentByid(req, res, next){
        try {
            await StudentService.updateStudent(req.query.id, {...req.body});
            res.send('Student was updated');
        } catch (e) {
            next(e);
        }
    }
    async deleteStudentByid(req, res, next){
        try {
            StudentService.deleteStudent(req.query.id);
            res.send('Student was deleted')
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new StudentsController();