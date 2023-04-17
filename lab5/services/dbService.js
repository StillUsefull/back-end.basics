const fs = require('fs');
const path = require('path');
const UniversalErrorHandler = require('../exceptions/UniversalErrorHandler.js');
class dbService {
    readData() {
        const file = JSON.parse(fs.readFileSync(path.resolve('../lab5/store/index.json')), 'utf-8');
        return file;
    }

    writeDataInJson(data){
        try {
            const file = JSON.parse(fs.readFileSync(path.resolve('../lab5/store/index.json')), 'utf-8');
            const json = {
                "first" : data,
                "second" : file.first,
                "third" : file.second,
                "fourth" : file.third,
                "fifth" : file.fourth
            }
            
            
            fs.writeFileSync('C:\\Users\\Debis\\Documents\\GitHub\\back-end.basics\\lab5\\store\\index.json', JSON.stringify(json));
        } catch (e) {
            throw UniversalErrorHandler.BadRequest(e.message);
        }
        
    }
}

module.exports = new dbService();