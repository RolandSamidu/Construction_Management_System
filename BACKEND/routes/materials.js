const express = require('express');
const Materials = require('../models/materials');

const router = express.Router();


// Save Materials

router.post('/material/save',(req,res) => {

    const contractID = req.body.contractID;
    const materialID = req.body.materialID;
    const materialType = req.body.materialType;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);

    const newMaterial = new Materials({
        contractID,
        materialID,
        materialType,
        quantity,
        price
    });

    newMaterial.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Material Save Successfully"
        });
    });
});


// Get Material's Details

router.get('/materials',(req,res)=>{

    Materials.find().exec((err, Materials)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingMaterials: Materials
        });
    });
});


// Get a Specific Material

router.get('/material/:id', (req,res) => {

    let materialID = req.params.id;

    Materials.findById(materialID,(err,Material) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            Material
        });
    });
});


//Update Material's details

router.patch('/material/update/:id', (req,res)=>{

    Materials.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, Materials) => {
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


//Delete Materials in the list

router.delete('/material/delete/:id', (req,res)=>{

    Materials.findByIdAndRemove(req.params.id).exec((err, deletedMaterial)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessfully.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successfully.",
            deletedMaterial
        });
    });
});


module.exports = router;