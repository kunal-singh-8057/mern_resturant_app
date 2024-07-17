const mongoose = require("mongoose");

const restorentschema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },

    number:{
        type:Number,
        required:true
    },

    time:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    contact_no:{
        type:Number,
        required:true
    }
});

const restorentmodel = mongoose.model("users",restorentschema);

module.exports = restorentmodel;