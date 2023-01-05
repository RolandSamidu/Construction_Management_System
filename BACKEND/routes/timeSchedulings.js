const express = require('express');
const TimeSchedulings = require('../models/timeSchedulings');

const router = express.Router();


// Save schedule

router.post('/timeScheduling/save',(req,res)=>{

    const contractID = req.body.contractID;
    const processID = req.body.processID;
    const division = req.body.division;
    const progress = Number(req.body.progress);
    const dateUpdated = req.body.dateUpdated;

    const newTimeSchedulings = new TimeSchedulings({
        contractID,
        processID,
        division,
        progress,
        dateUpdated
    });

    newTimeSchedulings.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Schedule Save Successfully"
        });
    });
});


// Get schedule's Details

router.get('/timeScheduling',(req,res)=>{

    TimeSchedulings.find().exec((err, TimeSchedulings)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingTimeSchedulings: TimeSchedulings
        });
    });
});


//Get a Specific schedule's details

router.get('/timeScheduling/:id', (req,res) => {

    let processID = req.params.id;

    TimeSchedulings.findById(processID,(err,TimeSchedulings) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            TimeSchedulings
        });
    });
});


//Update schedule's details

router.patch('/timeScheduling/update/:id', (req,res)=>{

    TimeSchedulings.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, TimeSchedulings) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Successfully."
            });
        }
    );
});


//Delete schedule's details

router.delete('/timeScheduling/delete/:id', (req,res)=>{

    TimeSchedulings.findByIdAndRemove(req.params.id).exec((err, deletedTimeSchedulings)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedTimeSchedulings
        });
    });
});


module.exports = router;