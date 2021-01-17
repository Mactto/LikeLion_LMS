const mongoose = require('mongoose');

const attendSchme = mongoose.Schema({
    cName: {
        type: String,
    },
    date: {
        type: String,
    },
    attendence: {
        type: Array,
        default: false
    }
})

const Attendance = mongoose.model('Attendence', attendSchme);
module.exports = {Attendance};