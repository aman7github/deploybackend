
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    "email":String,
    "pass":String,
    "age":Number,
    "city":String
    
},{
    versionKey: false
})

const UserModel = mongoose.model("notesuser",schema)

module.exports={
     UserModel
}