


const mongoose=require('mongoose');

const bcrypt =require('bcrypt')
const shortid =require('shortid')
const Package=require('./Package')
const {Schema}=mongoose;
const {stripeCharge}=require('../stripe')
const mongoSchema=new Schema({

            userId: {
                type: String,
                required: true,
                unique: true,
            },
            username: String,
            firstName: { type: String },
            lastName: { type: String },

            createdAt: { type: Date, required: true },
            email: { type: String, required: true, unique: true },

            password: { type: String, required: true },
            phone: String,
            address: String,
            city: String,
            zip: String,
            apt: String,


            phone: { type: String, required: true, },
            isAdmin: { type: Boolean, default: false },

            role: { type: String, enum: ["admin", "user", "kiosk clerk", "staff", ], default: 'user' },

            permission: { type: Number, require: true, default: 0 }, //0 = user
            status: Boolean,
            avatar: String,
            airportLocation: {

                airportName: String,   airportAddress: String,

        airportZip: String,
        airportCity: String,
        airportCountry: String,
    }


})



class UserClass{


	static async register(user){

		console.log('register')
		console.log(user)


 const {email,firstName,lastName,password,address,city,zip,apt,phone,state,username,isAdmin}=user;

		// check if email exists


		let normalizedEmail= email.toLowerCase();
		let normalizedUsername=username.toLowerCase();
		console.log('norma')

		 const isEmailExist= await this.findOne({email:normalizedEmail})
		 const isUsernameExist=await this.findOne({username:normalizedUsername})
	





if(isEmailExist){
	
	throw new Error('email already exists.')
	return ;
}

if(isUsernameExist){
	throw new Error('Username already exists')
}

// 



// hashed password

let hashedPassword = await bcrypt.hash(password,10);
console.log(hashedPassword)

// if isAdmin=false then create regular user
// else create admin user
if(!isAdmin){



try{

var user=await this.create({

	userId:shortid.generate(),
	username:normalizedUsername,
	firstName:firstName,
	lastName:lastName,
	createdAt:new Date(),
	email:normalizedEmail,
	password:hashedPassword,
	address:address,
	city:city,
	zip:zip,
	phone:phone,

})




}catch(err){


console.log(err.message)
	//throw new Error(err.message)
}



return user;

}else{

	// if admin=true


	// all the user here are admin
	// but they have different role and have different peremission parameter

	// count how may (isAdmin:true) are there.


	let adminCount=await this.find({isAdmin:true}).countDocuments();

	// if adminCount ==0 then set new user role to be 'admin/owner'
	// set every other user as "staff"
	// and 'admin' will give permission to the user/staff manually.

  		try{
	console.log('create new admin user---------------------------------')
 console.log(hashedPassword);
 console.log(shortid.generate())
var user=await this.create({

	userId:shortid.generate(),
	username:normalizedUsername,
	firstName:firstName,
	lastName:lastName,
	createdAt:new Date(),
	email:normalizedEmail,
	password:hashedPassword,
	address:address,
	city:city,
	zip:zip,
	phone:phone,
	isAdmin:true,
	role:adminCount===0?'admin':'staff',
	permission:adminCount===0?1:3,    //1=permission to edit staff, 3= no permission at all, 2=permission given to assistant at airport.
	airportLocation:{airportName:null,airportAddress:null,airportCity:null,airportCountry:null}


})




}catch(err){

console.log(err.message)
	//throw new Error(err.message)
}



return user;

}


	}



static async getuser(user){


	const _user=await this.findOne({userId:user.userId});






	if(!_user){
		return {status:'no user'}
	}else{
		return _user;
	}
}





//login is used by both user and admin (private route)
	static async login(user){

		// user={user_or_email:'',password:''}
		console.log(user)



	const userAccount=await this.findOne({$or:[{email:user.email_or_username},{username:user.email_or_username}],isAdmin:user.isAdmin});// user.isAdminb is pramert from admin route



	if(!userAccount){
		throw new Error('Incorrect username or password');
	}


	let hashedPassword=userAccount.password;

	let isPasswordMatch= await bcrypt.compare(user.password,hashedPassword);


	if(!isPasswordMatch){
		throw new Error ('Incorrect username or password')
	}

	return userAccount;
}





static async getAllStaff(){

	let staffs=await this.find({isAdmin:true,$or:[{role:'staff'},{role:'manager'},{role:'kiosk clerk'}]});



	if(!staffs){
		throw new Error("No staff found")
	}


	return staffs;



}


// update Staff 

static async updateStaff(staff){

console.log('=============update staff')
const {role,permission,airportLocation}=staff;

// check no more than two kiosk clerk is on each location.
if(role==="kiosk clerk"){
	let kioskClerk=await this.aggregate([
	{$match:{'airportLocation.airportName':{$eq:`${airportLocation.airportName}`}}},
	{$group:{_id:"$role",count:{$sum:1}}},
	{$match:{_id:"kiosk clerk"}}])


	if(kioskClerk.length && kioskClerk[0].count>=2){
		throw new Error('you cannot assigned more than 2 kiosk clerk in on Location');

	}
}

if(role==="manager"){

	let managerCount=await this.find({role:'manager'}).countDocuments();

	if(managerCount>=1){
		throw new Error('there can be only one manager.')
	}
}



	let updatedUser=await this.findOneAndUpdate({_id:staff._id},{$set:{role:role,permission:permission,airportLocation:airportLocation}});



	if(!updatedUser){
		throw new Error('could not update');
	}



	return 1;
}





// get staff by airport location


static async getStaffByLocation(){


	    let staffByLocation=await this.aggregate([
	    	{$match:{'airportLocation.airportName':{$ne:null}}},
             {$group:{_id:"$airportLocation",staffbylocation:{$push:{userId:"$userId",email:"$email",role:'$role',permission:'$permission',name:{$concat:['$firstName'," ",'$lastName']}}}}},
	  
	    	])



	    if(!staffByLocation){
	    	throw new Error('No staff or locations available')
	    }


	    return staffByLocation;
}





// create shipping order


static async createShipping(_package){

     console.log(_package);
const {packages,senderFirstName,senderLastName,senderPhone,senderEmail,airportLocation,processedBy,

	receiverFirstName, receiverLastName,receiverEmail,receiverPhone,receiverAddress,receiverCity,receiverApt,receiverCountry,
courierCompany,orderId,stripeToken,totalCost,payBy,dispatchType}=_package;



if(payBy==='cash'){


	 return Package.create({
	 	trackingId:shortid.generate(),
	 	packages,
	 	senderFirstName,
	 	senderLastName,
	 	senderPhone,
	 	senderEmail,
	 	airportLocation,
	 	processedBy,
	 	receiverFirstName,
	 	receiverLastName,
	 	receiverEmail,
	 	receiverPhone,

	 	receiverAddress,
	 	receiverCity,
	 	receiverCountry,
	 	courierCompany,
	 	orderId,
	 	totalCost,
	 	payBy,
	 	createdAt:new Date(),
	 	packageProcessed:{date:new Date(),isProcessed:true},
	 	packageShipped:{date:null,isShipped:false},
	 	packageDelivered:{date:null,isDelivered:false},
	 	dispatchType

	 })
}


if(payBy==='card'){

		const chargeObj=await stripeCharge({
	amount:totalCost*100,
	token:stripeToken.id,
	buyerEmail:senderEmail
});


	 return Package.create({
	 	trackingId:shortid.generate(),
	 	packages,
	 	senderFirstName,
	 	senderLastName,
	 	senderPhone,
	 	senderEmail,
	 	airportLocation,
	 	processedBy,
	 	receiverFirstName,
	 	receiverLastName,
	 	receiverEmail,
	 	receiverPhone,

	 	receiverAddress,
	 	receiverCity,
	 	receiverCountry,
	 	courierCompany,
	 	orderId,
	 	totalCost,
	 	payBy,
	 	dispatchType,
	 	createdAt:new Date(),
	 	stripeCharge:chargeObj,
	 packageProcessed:{date:new Date(),isProcessed:true},
	 	packageShipped:{date:null,isShipped:false},
	 	packageDelivered:{date:null,isDelivered:false}


	 	

	 })


}










            



	  return 1;
}



// create Drop off order


static async createDropOff(_package){

     console.log(_package);
const {packages,senderFirstName,senderLastName,senderPhone,senderEmail,airportLocation,processedBy,senderAddress,senderApt,senderCity,senderCountry,senderZip,

	receiverFirstName, receiverLastName,receiverEmail,receiverPhone,receiverAddress,receiverCity,receiverApt,receiverCountry,receiverZip,
courierCompany,orderId,stripeToken,initialCost,payBy,dispatchType}=_package;


if(payBy==='card'){


	const charge=await stripeCharge({
	amount:initialCost*100,
	token:stripeToken.id,
	buyerEmail:senderEmail
});



	


	 return Package.create({
	 	trackingId:shortid.generate(),
	 	packages,
	 	senderFirstName,
	 	senderLastName,
	 	senderPhone,
	 	senderEmail,
	 	senderAddress,
	 	senderCity,
	 	senderApt,
	 	senderCountry,
	 	senderZip,
	 	airportLocation,
	 	processedBy,
	 	receiverFirstName,
	 	receiverLastName,
	 	receiverEmail,
	 	receiverPhone,

	 	receiverAddress,
	 	receiverCity,
	 	receiverCountry,
	 	courierCompany,
	 	receiverZip,
	 	orderId,
	 	
	 	payBy,
	 	dispatchType,
	 	createdAt:new Date(),
	 	stripeCharge:charge,
	 	
      pickUp:{date:null,isPickedUp:false,pickUpBy:null,usageTime:null,finalPayment:null},
      stored:{date:new Date(),dropOffBy:senderFirstName,initialPayment:initialCost},

    totalCost:null, // calculated later after pickup.
	 	

	 })

	
}











            



	  return 1;
}



}






mongoSchema.loadClass(UserClass);



var User=mongoose.model("User",mongoSchema);




module.exports=User;