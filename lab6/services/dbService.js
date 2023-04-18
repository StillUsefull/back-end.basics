const fs = require('fs');


class DBService {
    readFromJSON(){
        try {
            const data = fs.readFileSync('', 'utf-8');
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
            this.writeIntoJSON(currentData);
            return currentData;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    updateByName(id, data){
        this.deleteByName(id);

        
    }
    
    deleteByName(name) {
        try {
            const data = this.readFromJSON();
            const studentIndex = data.map((item, index) => {
                if (item.name == name){
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
            fs.writeFileSync('', JSON.stringify(data), 'utf-8');
            return true;
        }
        catch (e) {
            throw new Error(e.message);
        }
    }
}

module.exports = new DBService();