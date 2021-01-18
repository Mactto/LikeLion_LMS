const mongoose = require('mongoose');

const attendSchme = mongoose.Schema({
    title: {
        type: String,
    },
    date: {
        type: String,
    },
    enableTime: {
        type: String,
    },
    attendence: {
        type: Array,
        default: false
    }
})

module.exports = mongoose.model('class', attendSchme, 'class');