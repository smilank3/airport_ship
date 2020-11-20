

import React, {useState} from 'react';

import StripeCheckout from 'react-stripe-checkout';
import {Button} from 'react-bootstrap';

import keys from '../../server/keys.js'

let StripePublishableKey=keys.stripe.StripePublishableKey;


const BuyButton =({user,priceDetails,products,setVisible,deliveryInstruction,dispatchType})=>{




const [showModal,setShowModal]=useState(false);




const onToken= async(token)=>{

 alert(' processing ');

 // SEVER....


 // close stripe modal
  setShowModal(false)

alert(' payment button')
  // and process..........

  let orderId=new Date().getTime()+Math.random().toString(36).substr(2, 9);

 



// show order detail modal;
 
}





 return (

  <div >

  <StripeCheckout
  stripeKey={StripePublishableKey}
  token={onToken}
  name="Aubergine Cafe"
  email="matho@gmail.com"
  desktopShowModal={showModal ||null}
 

  >
  	
  	<Button type="submit" onClick={()=>setShowModal(true)} style={{backgroundColor:'purple',border:'none'}}
    >
  		Proceed to Checkout           $ 34
  	</Button>
  </StripeCheckout>



  </div>


 	)


		
}



export default BuyButton;