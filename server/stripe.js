
const stripe= require('stripe');
const keys=require('./keys')


function stripeCharge({amount, token, buyerEmail}){

	console.log('stripe charge-------------------')

	const dev=process.env.NODE_ENV!=='production';

	const API_KEY=dev? keys.stripe.Stripe_Test_SecretKey:keys.stripe.Stripe_Test_SecretKey;


	const client=stripe(API_KEY);

	


	return client.charges.create({

		amount,
		currency:'usd',
		source:token,
		receipt_email:buyerEmail,
		description:'Payment for the package'
	})
}


exports.stripeCharge=stripeCharge;