const dbService = require("./dbService");


class StudentService {

    async registration(data){
       await dbService.addOneToJSON(data);
       return true;
    }

    async getStudents(){
        const studentsData = await dbService.readFromJSON();
        return studentsData;
    }

    async updateStudent(name, data){
        await dbService.updateByName(name, data);
        return true;
    }

    async deleteStudent(name){
        await dbService.deleteByName(name);
    }

}

module.exports = new StudentService();