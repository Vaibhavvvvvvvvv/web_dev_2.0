const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    email:{
        type: String,
        // required:true
    },
    password:{
        type: String,
        // required:true
    }
})
const form = mongoose.model('form',formSchema)
module.exports = form;