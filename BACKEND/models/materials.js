const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({

    contractID:{
        type:String,
        required:true
    },
    materialID:{
        type:String,
        required:true
    },
    materialType:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

});

module.exports = mongoose.model('Materials',materialSchema);