



const express=require('express');

const User= require('../modal/User');

const router=express.Router();



router.use((req,res,next)=>{

	console.log(req.user);


	next();
})




// api for user request;

module.exports=router;
