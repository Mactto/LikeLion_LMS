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

router.post('/getClassInfo', (req, res) => {
    Class.findOne(
        {_id: req.body.id},
        function(err, result) {
            if(err) res.json({success: false})
            res.json({success: true, classInfo: result})
        }
    )
})

router.post('/attendence', (req, res) => {
    const classId = req.body.classId.replace('?','');
    console.log(classId);
    Class.findOneAndUpdate(
        {_id: classId},
        {"$push": {"attendence": "asdfasdf"}},
        (err, result) => {
            if(err) res.json({success: false})
            res.status(200).json({success: true, result: result})
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