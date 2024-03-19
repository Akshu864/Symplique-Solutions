
const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    datetime:{
        type:Date,
        required: true
    },
    message:{
        type:String,
        required: true
    },
    remindOption:{
        type:String,
        enum:['email','phone'],
        required:true
    },
    destination:{
        type:String,
        required:true
    }
  
},{timestamps:true});

module.exports = mongoose.model('Reminder', reminderSchema);
