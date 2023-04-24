const WorkService = require('../services/WorkService.js');

class WorkController {
    async getWorks(req, res, next){
        try {
            const workData = await WorkService.getAll();
            res.json(workData);
        } catch (e) {
            next(e);
        }
    }
    async createWork(req, res, next){
        try {
            await WorkService.createWork(req.body);
            res.send('Work was created');
        } catch (e) {
            next(e);
        }
    }
    async updateWorkById(req, res, next){
        try {
            await WorkService.updateData(req.query.id, req.body);
            res.send('Work was updated');
        } catch (e) {
            next(e);
        }
    }
    async deleteWork(req, res, next){
        try {
            await WorkService.deleteWork(req.query.id);
            res.send('Work was deleted')
        } catch (e) {
            next(e);
        }
    }
    async addStudent(req, res, next){
        try {
            await WorkService.addStudentIntoWork(req.query.studentId, req.query.workId);
            res.send('Student was added')
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new WorkController();

