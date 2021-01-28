const express = require('express');
const passport =require('passport');
const router = express.Router();
const cors = require('cors');
router.use(cors());

router.get('/auth', (req, res) => {
    console.log(req.session.passport)
    if (req.session.passport === undefined) {
        return res.status(200).json({success: false})
    } else {
        return res.redirect("http://localhost:3000/")
    }
}) 

router.get('/auth/google',
    passport.authenticate('google', { scope: 'email'})
);

router.get('/auth/google/callback',
    passport.authenticate('google', 
    { 
        failureRedirect: '/api/user/fail', 
        successRedirect: '/api/user/auth',
    })
)

router.get('/auth/logout', (req, res) => {
    req.session.destroy(function(e){
        req.logout();
        res.redirect("http://localhost:3000/login");
    });
})

router.get('/test', (req, res) => {
    console.log(req.session.passport);
})

router.get('/fail', (req, res) => {
    res.send("failed");
})


module.exports = router;