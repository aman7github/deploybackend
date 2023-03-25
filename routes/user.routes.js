
const express = require("express")


const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {UserModel} = require("../model/users.model")

const approute = express.Router()



approute.post("/register",async(req,res)=>{
    const {email,pass,age,city} = req.body

    try{
    bcrypt.hash(pass, 4 ,async(err, hash)=> {
        const newuser = new UserModel({email,pass:hash,age,city})
        await newuser.save()
        res.status(200).send({"msg":"new user registerd"})
    })
} catch(err){
    res.status(400).send({"msg":err.message})
}

})


approute.post("/login", async(req,res)=>{
  const {email,pass} = req.body

  try{
      
     const user = await UserModel.find({email})
     console.log(user)
     if(user){
      bcrypt.compare(pass, user[0].pass , (err, result)=> {
       if(result){
         res.status(200).send({"msg":"login successful","token": jwt.sign({"userID":user[0]._id},"batman") })
       }else{
        res.status(400).send({"msg":err.message})
       }
    });
    }else{
        res.status(400).send({"msg":err.message})
    }

  }catch(err){
    res.status(400).send({"msg":err.message})
  }

})


module.exports={
    approute
}