const express = require('express');
const passport =require('passport');
const router = express.Router();
const User = require('../models/User');

router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log(req);
})

router.post('/register', (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        student_id: req.body.student_id,
        
    }, function(err) {
        if(err) throw err;
        console.log("okok2");
    });
})

module.exports = router;