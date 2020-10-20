

import React, {useState} from 'react';

import StripeCheckout from 'react-stripe-checkout';
import {Button} from 'react-bootstrap';


let StripePublishableKey=process.env.stripe_published;

const BuyButton =({user,priceDetails,products,setVisible,deliveryInstruction,dispatchType})=>{




const [showModal,setShowModal]=useState(false);




const onToken= async(token)=>{

 alert(' processing ');

 // SEVER....


 // close stripe modal
  setShowModal(false)

  // and process..........

  let orderId=new Date().getTime()+Math.random().toString(36).substr(2, 9);

 



// show order detail modal;
 
}

//
const onLoginClicked=()=>{

	if(!user){
		const redirectUrl=`${window.location.pathname}?buy=1`;

		window.location.href=`/auth/google?redirectUrl=${redirectUrl}`
	}
}
 




 return (

  <div>

  <StripeCheckout
  stripeKey={StripePublishableKey}
  token={onToken}
  name="Aubergine Cafe"
  email="matho@gmail.com"
  desktopShowModal={showModal ||null}
 

  >
  	
  	<Button onClick={()=>setShowModal(true)}
    >
  		Proceed to Checkout           $ 34
  	</Button>
  </StripeCheckout>



  </div>


 	)


		
}



export default BuyButton;