const dbService = require("./dbService");


class StudentService {

    async registration(){

    }

    async getStudents(){
        const studentsData = await dbService.readData();
        return studentsData;
    }

    async updateStudent(id){

    }

    async deleteStudent(id, info){

    }

}

module.exports = new StudentService();