const mongoose = require('mongoose');

const architectSchema = new mongoose.Schema({

    contractID:{
        type:String,
        required:true
    },
    employeeID:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    modifiedDate:{
        type:String,
        required:true
    },
    uploadFileUrl:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Architects',architectSchema);