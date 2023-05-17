const {uuid} = require('uuidv4');
const path = require('path');


class FileService {
    saveFile(file){
        try {
            const fileName = uuid() + '.jpg';
            const filePath = path.resolve('C:\\Users\\Debis\\Documents\\GitHub\\back-end.basics\\lab7\\localstore\\', fileName);
            file.mv(filePath);
        return fileName;
        } catch(e) {
            console.log(e)
            return '';
        }
    }
}

module.exports = new FileService();