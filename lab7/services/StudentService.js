const UniversalErrorHandler = require('../exceprions/UniversalErrorHandler.js');
const Students = require('../models/student.model.js');
const FileService = require('./FileService.js');

class StudentService {

    async registration(data, picture){
        console.log(picture)
        const candidate = await Students.findOne({surname: data.surname})
        const fileName = FileService.saveFile(picture);
        if (candidate) {
            throw UniversalErrorHandler.BadRequest(`User with ${email} is already exist`)
        }
        if (!fileName) {
            throw UniversalErrorHandler.BadRequest('U forgot to add photo');
        }
        const student = await Students.create({...data, avatar: fileName});
        return student;
    }

    async getStudents(){
        const studentsData = await Students.find({});
        return studentsData;
    }

    async updateStudent(id, data){
        const student = await Students.findByIdAndUpdate(id, {data})
        if (student){
             return true;
        } 
        return UniversalErrorHandler.BadRequest('I cannot update student`s info');
    }

    

    async deleteStudent(id){
        const student = await Students.findByIdAndDelete(id);
        if (student) {
            return true;
        }
        return UniversalErrorHandler.BadRequest('I cannot delete student`s info by this id');
    }

}

module.exports = new StudentService();