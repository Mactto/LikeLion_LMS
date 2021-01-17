const mongoose = require('mongoose');

const attendSchme = mongoose.Schema({
    title: {
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