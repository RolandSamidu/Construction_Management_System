const express = require('express');
const machineries = require('../models/machineries');
const Machineries = require('../models/machineries');

const router = express.Router();


//Save Machinery

router.post('/machinery/save',(req,res)=>{

    const machineryId = req.body.machineryId;
    const description = req.body.description;
    const quantity = Number(req.body.quantity);
    const purchasedDate = req.body.purchasedDate;
    const imageUrl = req.body.imageUrl;

    const newMachinery = new Machineries({
        machineryId,
        description,
        quantity,
        purchasedDate,
        imageUrl
    });

    newMachinery.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Machinery Save Successfully"
        });
    });
});


//Get Machinery's details

router.get('/machineries',(req,res)=>{

    Machineries.find().exec((err, machineries)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingMechineries: machineries
        });
    });
});


//Get a Specific Machinery

router.get('/machinery/:id', (req,res) => {

    let machineryId = req.params.id;

    Machineries.findById(machineryId,(err,machinery) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            machinery
        });
    });
});


//Update Machinery's details

router.patch('/machinery/update/:id', (req,res)=>{

    Machineries.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, machineries) => {
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


//Delete Machinery in the list

router.delete('/machinery/delete/:id', (req,res)=>{

    Machineries.findByIdAndRemove(req.params.id).exec((err, deletedMachinery)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedMachinery
        });
    });
});


module.exports = router;