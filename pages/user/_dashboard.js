

import sendRequest from '../../lib/sendRequest'

import {FaHistory,FaShippingFast} from 'react-icons/fa'

import OrderHistory from './OrderHistory'
import UserDropOffHistory from './UserDropOffHistory'
import React from 'react'


const Dashboard=(props)=>{

	const [state,setState]=React.useState('shippingHistory');

		return (<div>
    		
           <div style={{marginTop:''}}>
 	

   	<div style={{display:'flex',justifyContent:'space-between'}} >
	
    <div style={{border:'2px solid purple',padding:'2px 10px',background:state=='shippingHistory'?'purple':'',color:state==="shippingHistory"?'white':'purple',fontWeight:600,marginBottom:'',float:'right',cursor:'pointer',borderRadius:'4px'}}
onClick={()=>setState('shippingHistory')}
  >
    <FaHistory size="20px" style={{padding:'2px',marginRight:'4px'}}/>
      <span>Shipping History</span>
    </div>

        <div style={{border:'2px solid purple',padding:'2px 10px',background:state==="dropOffHistory"?'purple':'',color:state==='dropOffHistory'?'white':'purple',fontWeight:600,marginBottom:'',float:'right',cursor:'pointer',borderRadius:'4px'}}
onClick={()=>setState('dropOffHistory')}
  >
    <FaHistory size="20px" style={{padding:'2px',marginRight:'4px'}}/>
      <span>Drop Off History</span>
    </div>
   
  </div>


{state==='shippingHistory'?(
	<OrderHistory userProfile={props.userProfile} />
	):(

<UserDropOffHistory userProfile={props.userProfile}/>

	)}
  
    
 </div>
    	</div>)
}



export default Dashboard;