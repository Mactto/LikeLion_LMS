const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    googleId: {
        type: String,
    },
    name: {
        type:String,
    },
    role: {
        type: Number,
        default: 0
    },
})

module.exports = mongoose.model('users', userSchema, 'users');