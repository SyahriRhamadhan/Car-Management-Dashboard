const mongoose = require('mongoose')
// schema 
var schema = new mongoose.Schema({
    image:
    {
        data: Buffer,
        contentType: String
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    size: String
    
},{ timestamps: { createdAt: false, updatedAt:  true }})
//,{ timestamps: { createdAt: false, updatedAt: true } }
// { createdAt: false, updatedAt: true }

const Cardb = mongoose.model('Cardb', schema)
module.exports = Cardb