



const express =require('express');
const next=require('next')
const dev=process.env.NODE_ENV !=='production';
const app=next({dev});
const port= process.env.PORT||8001;

const bcrypt =require('bcrypt')


const {generateToken,validateToken}=require('./authToken')


const cookieParser=require('cookie-parser')

const mongoose =require('mongoose');

const ROOT_URL=`http://localhost:${port}`
const User=require('./modal/User')
const Location =require('./modal/Location')

const Package=require('./modal/Package')

const keys=require('./keys')

const handle=app.getRequestHandler();



try{

    mongoose.connect(keys.mongodb.dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
}catch(error){


    handleError(error)
}



var db=mongoose.connection;

db.on('error',(err,x)=>{console.log("connnection error")})

db.once('open', ()=>{console.log("we are coonnected")})

mongoose.set('useFindAndModify',false)






app.prepare().then(async()=>{
	const server=express();


	

	server.use(express.json())
   server.use(cookieParser())
   







 

// create account

server.post('/api/User/signup',async(req,res)=>{





// 

try{

			let user=await User.register(req.body)
		
	


const token=generateToken({
	userId:user.userId
})




	

	return res.json({token:token,userAccount:user})
	

}catch(err){


	return res.status(400).json({error:err.message})
}



})




	


	server.get('/api/User/profile',async (req,res)=>{

	

	//decode token
let decodedToken=validateToken(req.headers.token);

console.log(decodedToken)


let user=await User.getuser(decodedToken);

const {isAdmin,role,username,phone,firstName,lastName,email,address,airportLocation,city,permission}=user;

		res.json({isAdmin,role,username,phone,firstName,lastName,email,address,airportLocation,city,permission})
	})



// check if user

  var _isUser=async (req,res,next)=>{
 	let decodedToken=validateToken(req.cookies.token);

console.log(decodedToken)


let _user=await User.getuser(decodedToken);



  if(_user.role==='user'){
  	next();
  }else{
  	 app.render(req,res,'/404')
  }



  }


	// user dashboard

	server.get('/dashboard',_isUser,async(req,res)=>{




		app.render(req,res,"/user/_dashboard",{some:'fsf'})
	})

	server.get('/profile',_isUser,async(req,res)=>{




		app.render(req,res,"/user/_profile",{some:'fsf'})
	})



// check if admin . 
 var _isAdmin=async (req,res,next)=>{
 	let decodedToken=validateToken(req.cookies.token);

console.log(decodedToken)


let _user=await User.getuser(decodedToken);

  if(_user._isAdmin){
  	next();
  }else{
  	 app.render(req,res,'/404')
  }



  }

	// admin or manager dashboard

	server.get('/admin/dashboard',_isAdmin,async(req,res)=>{
		app.render(req,res,"/admin/_dashboard",{})
	})


	server.get('/admin/profile',_isAdmin,async(req,res)=>{
		app.render(req,res,"/admin/_profile",{})
	})







  // staff 
 
   var _isStaff=async (req,res,next)=>{
 	let decodedToken=validateToken(req.cookies.token);



let _user=await User.getuser(decodedToken);

console.log('----------------------------- is staff')
console.log(_user)

  if(_user.isAdmin && _user.role==="staff"){
  	next();
  }else{
  	 app.render(req,res,'/404');
  }



  }

  // kiosk clerk

   var _isKioskClerk=async (req,res,next)=>{
  let decodedToken=validateToken(req.cookies.token);

console.log(decodedToken)


let _user=await User.getuser(decodedToken);



  if(_user.isAdmin && _user.role==="kiosk clerk"){
    next();
  }else{
     app.render(req,res,'/404');
  }



  }

  // staff dashboard

  server.get('/staff/dashboard',_isStaff,async(req,res)=>{


  	 app.render(req,res,"/staff/_dashboard",{});
  })

  server.get('/staff/profile',_isStaff,async(req,res)=>{

  	app.render(req,res,'/staff/_profile',{})
  })




// kiosk dashboard
server.get('/kiosk/dashboard',_isKioskClerk, async(req,res)=>{


  app.render(req,res,'/kiosk/_dashboard',{})
})


// kios clerk profile
server.get('/kiosk/personnel',_isKioskClerk,async(req,res)=>{
  app.render(req,res,"/kiosk/_profile",{})
})

// create package

server.post('/api/admin/createShipping',async(req,res)=>{

    try{
      let package_=await User.createShipping(req.body);

    
      res.json({status:'ok',trackingId:package_.trackingId})
    }catch(err){
      res.json({error:err.message})
    }
})


// get all packages based on location


server.post('/api/admin/getPackagesByLocation',async(req,res)=>{

  const {location}=req.body;

  try{

    let packages=await Package.getPackagesByLocation(location);

    res.json({status:'ok',packages:packages})
  }catch(err){
    res.json({error:err.message})
  }
})


// get shipping status based on tracking id

server.post('/api/admin/getShippingStatusByTrackingId',async(req,res)=>{

 const {trackingid}=req.body;

 try{
  let package_=await Package.getShippingStatusByTrackingId(trackingid);

  res.json({status:'ok',package_})
 }catch(err){
  res.json({error:err.message})
 }

})

// update package (simulation)
server.post('/api/admin/updatePackage',async(req,res)=>{

  try{
       let package_=await Package.updatePackage(req.body);

       res.json({status:'ok'})
  }catch(err){
    res.json({error:err.message})
  }
})




// user login


server.post('/api/User/login',async(req,res)=>{


	console.log(req.body)

try{

	let userAccount=await User.login(req.body);

	  const token=generateToken({userId:userAccount.userId});


        console.log(token);
	  res.json({token:token,userAccount:userAccount}) // sender userAccount. for routing based on roles.
}catch(err){
	res.json({error:err.message})
}


})


	server.get('/logout',(req,res)=>{
         console.log("---------------------- logout")
		console.log(req.cookies)
     res.clearCookie('token');
        return res.status(200).redirect('/')
	})


















	// get all staff

	server.get('/getAllStaff',async(req,res)=>{

 

     try{
     	let staffs=await User.getAllStaff();
  

     	res.json({staffs});

     }catch(err){

     	 res.json({error:err.message})
     }


	})







 // get All locations


    server.get('/api/admin/getAllLocations',async(req,res)=>{

    	try{
    		let locations=await Location.getAllLocations();

    		res.json({locations});
    	}catch(err){
    		res.json({error:err.message})
    	}
    })



    // add location

    server.post("/api/admin/addLocation",async(req,res)=>{


    	try{
    		let location=await Location.addLocation(req.body);

    		res.json({status:'ok'})
    	}catch(err){
    		res.json({error:err.message})
    	}
    })



    // delete location

    server.post('/api/admin/deleteLocation',async(req,res)=>{

    	try{
    		let location=await Location.deleteLocation(req.body);
    		res.json({status:'ok'})
    	}catch(err){
    		res.json({error:err.message})
    	}
    })







// update staff


   server.post('/api/admin/updateStaff',async(req,res)=>{


    try{
        let location=await User.updateStaff(req.body);
        res.json({status:'ok'})
      }catch(err){
        res.json({error:err.message})
      }
   })


//

server.get('/api/admin/getStaffByLocation', async(req,res)=>{


  try{
  let data=await User.getStaffByLocation();
  res.json({data})
  }catch(err){
    res.json({error:err.message})
  }
})



















const URL_MAP={
	'/login':'/login',
	


}
  server.get('*', (req, res) => {

 
  	const url=URL_MAP[req.path];
  	if(url){
  		console.log(url)
  		app.render(req,res,url);
  	
  	}else {
  		handle(req,res);

  	
  	}

  });


	server.listen(port,err=>{
		if(err){
			throw err;
		}
		console.info(` Ready on http://localhost:${port}`)
	})
})


