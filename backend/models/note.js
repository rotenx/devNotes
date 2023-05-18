const mongoose = require("mongoose");


const NoteSchema = new mongoose.Schema({
    userToken: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    url: {
        type: String, 
        required: true
    },
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    selectedData:{
        type:Object,
    },
    image:{
        type:String
    }
})

const Notes = new mongoose.model("Note",NoteSchema);

module.exports = Notes;