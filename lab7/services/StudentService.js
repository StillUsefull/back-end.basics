const Students = require('../models/student.model.js');


class StudentService {

    async registration(data){
        const candidate = await Students.findOne({surname: data.surname})
        if (candidate) {
            throw UniversalErrorHandler.BadRequest(`User with ${email} is already exist`)
        }
    }

    async getStudents(){
        const studentsData = await Students.find({});
        return studentsData;
    }

    async updateStudent(name, data){
        
    }

    async deleteStudent(name){
        
    }

}

module.exports = new StudentService();