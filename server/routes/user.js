const express = require('express');
const passport =require('passport');
const router = express.Router();
const User = require('../models/User');

router.get('/google', (req, res) => {
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login']
    })
})

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }), (req, res) => {
        res.redirect('/');
    }
) 

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
)

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