class StudentDto{
    surname;
    birthDate;
    sex;
    group;
    facult;
    avrMark;
    work;
    city;

    constructor(model){
        this.surname = model.surname;
        this.birthDate = model.birthDate;
        this.sex = model.sex;
        this.group = model.group;
        this.facult = model.facult ;
        this.avrMark = model.avrMark ;
        this.work = model.work ;
        this.city = model.city ;
    }
}

module.exports = StudentDto;