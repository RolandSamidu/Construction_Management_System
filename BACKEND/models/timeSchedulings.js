const mongoose = require('mongoose');

const timeSchedulingSchema = new mongoose.Schema({

    contractID:{
        type:String,
        required:true
    },
    processID:{
        type:String,
        required:true
    },
    division:{
        type:String,
        required:true
    },
    progress:{
        type:Number,
        required:true
    },
    dateUpdated:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('TimeSchedulings',timeSchedulingSchema);