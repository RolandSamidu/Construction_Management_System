const mongoose = require('mongoose');

const machinerySchema = new mongoose.Schema({

    machineryId:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    purchasedDate:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Machineries',machinerySchema);