const fs = require('fs');


class DBService {
    readFromJSON(){
        try {
            const data = fs.readFileSync('C:\\Users\\Debis\\Documents\\GitHub\\back-end.basics\\lab6\\store\\index.json', 'utf-8');
            const array = Array.from(JSON.parse(data));
            return array;
        } catch (e) {
            throw new Error(e.message);
        }
        
    }
    addOneToJSON(data){
        try {
            const currentArray = this.readFromJSON();
            currentArray.push(data);
            this.writeIntoJSON(currentArray);
            return true;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    updateByName(surname, data){
        try {
            this.deleteByName(surname);
            this.addOneToJSON(data);
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
    
    deleteByName(surname) {
        try {
            const data = this.readFromJSON();
            const studentIndex = data.map((item, index) => {
                if (item.surname == surname){
                    return index;
                }
            })
            delete data[studentIndex];
            this.writeIntoJSON(data);
            return true;
        } catch (e) {
            throw new Error(e.message);
        }
        
    }

    writeIntoJSON(data){
        try {
            fs.writeFileSync('C:\\Users\\Debis\\Documents\\GitHub\\back-end.basics\\lab6\\store\\index.json', JSON.stringify(data), 'utf-8');
            return true;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }

    //still beta
    isStudentAlreadyExist(surname) {
        const currentArray = this.readFromJSON();
        const isExist = currentArray.map((item) => {
            if (item.surname == surname){
                return true;
            }
            return false;
        })
        return isExist;
    }   
}

module.exports = new DBService();