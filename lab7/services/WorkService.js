const UniversalErrorHandler = require('../exceprions/UniversalErrorHandler');
const Works = require('../models/work.model.js');
const Students = require('../models/student.model.js');
class WorkService {

    async getAll(){
        const workData = await Works.find({});
        return workData;
    }

    async createWork(data){
        const candidate = await Works.findOne({name: data.name});
        if (candidate) {
            return UniversalErrorHandler.BadRequest('Work with this name already exist');
        }
        const work = await Works.create(data);
        return work;
    }

    async updateData(id, data){
        const workData = Works.findByIdAndUpdate(id, {data});
        if (!workData) {
            return UniversalErrorHandler.BadRequest('I cannot update work by this id');
        }
        return true;
    }

    async deleteWork(id) {
        const workData = Works.findByIdAndDelete(id)
        if (!workData){
            return UniversalErrorHandler.BadRequest('I cannot delete work by this id');
        }
        return true;
    }

    async addStudentIntoWork(studentId, workId){
        const workData = Works.findOne({_id: workId});
        if (!workData) {
            return UniversalErrorHandler.BadRequest('I cannot find work by this id');
        }
        const student = Students.findOne({_id: studentId});
        if (!student) {
            return UniversalErrorHandler.BadRequest('I cannot find work by this id');
        }
        
        workData.studentId.push(studentId);
        workData.save();

        return true;
    }

}

module.exports = new WorkService();