
const express = require("express")
const {connection} = require("./db/users.db")
const app = express()
require("dotenv").config()
const {approute}= require("./routes/user.routes")
const {notesroute}= require("./routes/notes.routes")
const {auth} = require("./middleware")
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use("/user",approute)
app.use(auth)
app.use("/notes",notesroute)






app.listen(process.env.port,async()=>{

 try{
    await connection
    console.log("server is connect")
 }
 catch(err){
     console.log("err")
 }

})