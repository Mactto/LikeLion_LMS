const express = require('express');
const passport =require('passport');
const router = express.Router();
const User = require('../models/User');
const cors = require('cors');

router.use(cors());

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile']})
);

router.get('/auth/google/callback',
    passport.authenticate('google', 
    { failureRedirect: '/api/user/fail', successRedirect: '/api' }
    )
)

router.get('/fail', (req, res) => {
    res.send("failed");
})


module.exports = router;