const mongoose = require('mongoose');

const attendSchme = mongoose.Schema({
    student_id: {
        type: Number,
        maxlength: 8
    },
    date: {
        type: String,

    },
    attendence: {
        type: Boolean,
        default: false
    }
})

const Attendance = mongoose.model('Attendence', attendSchme);
module.exports = {Attendance};