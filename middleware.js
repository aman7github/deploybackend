
const express = require("express")
const jwt = require("jsonwebtoken")

const auth =(req,res,next)=>{

    const token = req.headers.authorization
   
     if(token){
      console.log(token)
     const decoded = jwt.verify(token, "batman"  )
     console.log(decoded)
       if(decoded){
          //console.log(req.body)
           req.body.userID = decoded.userID
           next()
       }else{
           res.status(400).send({"msg":"not decoded"})
       }
   
     }else{
       res.status(400).send({"msg":"please login first"})
     }
   }

   module.exports={
    auth
   }