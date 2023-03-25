
const express = require("express")


const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {NotesModel} = require("../model/notes.model")

const notesroute = express.Router()




notesroute.post("/add",async(req,res)=>{
          
    try{
         const newnotes = new NotesModel(req.body)
         await newnotes.save()
         res.status(200).send({"msg":"notes added"})
    }catch(err){
         res.status(400).send({"msg":err.message})
    }


})

notesroute.get("/get",async(req,res)=>{
       const token = req.headers.authorization
       const decoded = jwt.verify(token,"batman")
       console.log(decoded)
    try{
        const notes = await NotesModel.find({userID:decoded.userID})
        res.status(200).send(notes)
        
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

notesroute.patch("/update/:id",async(req,res)=>{
    const {id}=req.params
    try{
         await NotesModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({"msg":"note updated"})
        
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

notesroute.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
        await NotesModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"note deleted"})
        
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})





module.exports={
    notesroute
}