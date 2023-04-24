const {model, Schema} = require('mongoose');

const StudentSchema = new Schema({
    surname: {type: String, unique: true, required: true},
    birthDate: {type: Number, required: true},
    sex: {type: String, require: true},
    group: {type: String, required: true},
    facult: {type: String, required: true},
    avrMark: {type: Number, required: true},
    work: {type: String, required: false},
    city: {type: String, required: true}
});

module.exports = model('Student', StudentSchema);