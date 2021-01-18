const express = require('express');
const router = express.Router();
const Class = require("../models/Class");


router.get('/getClass', (req, res) => {
    console.log("server getclass");
    Class.find(
        {},
        function(err, result) {
            if(err) console.log(err);
            res.json(result);
        }
    )
})

router.post('/addClass', (req, res) => {
    console.log("addClasses");
    const newClass = new Class(req.body);
    newClass.save((err) => {
        if(err) return err;
        return res.status(200).json({success:true});
    })
})

module.exports = router;