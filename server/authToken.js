const jwt=require('jsonwebtoken');


const secret="i am secret";


const generateToken=(data)=>{
console.log(generateToken)
	console.log(data)
	const token=jwt.sign(data,secret,{expiresIn:'365d'});

	return token;
}


const validateToken=(token)=>{
console.log('validateToken')
	console.log(token)
	try{
		var decoded=jwt.verify(token,secret);

		return decoded;
	}catch(err){
		return {};
	}
}


module.exports= {generateToken,validateToken};