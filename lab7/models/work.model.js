const {Schema, model } = require('mongoose');

const WorkSchema = new Schema({
    studentId: [{type: Schema.Types.ObjectId, ref: 'Student', required: false}],
    type: {type: String, required: true},
    name: {type: String, required: true},
})

module.exports = model('Work', WorkSchema);