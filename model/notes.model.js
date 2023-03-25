
const mongoose = require("mongoose")

const schema = mongoose.Schema({
   "title":String,
   "status":Boolean,
   "userID":String
    
},{
    versionKey: false
})

const NotesModel = mongoose.model("makenotes",schema)

module.exports={
     NotesModel
}