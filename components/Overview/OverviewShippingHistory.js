
import {Nav,Table} from 'react-bootstrap'
import React, {useState} from 'react'
import {FaHistory,FaShippingFast} from 'react-icons/fa'
import CreateShipping from '../CreateShipping/CreateShipping'
import History from '../History/History'
const ShippingDashboard=(props)=>{

	const [state,setState]=useState('history')

	return (
 <div style={{marginTop:''}}>
 	

   	<div style={{display:'flex',justifyContent:'space-between'}} >
		    <div style={{border:'2px solid purple',padding:'2px 10px',background:state==="newShipping"?'purple':'',color:state==="newShipping"?'white':'purple',fontWeight:600,marginBottom:'',float:'left',cursor:'pointer',borderRadius:'4px'}}
onClick={()=>setState('newShipping')}
		    >
		    
		       <FaHistory size="20px" style={{padding:'2px',marginRight:'4px'}}/>
      <span>History</span>
		    </div>

    <div style={{border:'2px solid purple',padding:'2px 10px',background:state==="history"?'purple':'',color:state==="history"?'white':'purple',fontWeight:600,marginBottom:'',float:'right',cursor:'pointer',borderRadius:'4px'}}
onClick={()=>setState('history')}
  >
  <FaShippingFast size="20px" style={{padding:'1px',marginRight:'4px'}}/>
		      <span>Flow charts</span>
   
    </div>
   
  </div>

{/*}
  {state==='history'?(
  <History userProfile={props.userProfile} />
    ):(
<div style={{marginTop:'70px'}}>
	<CreateShipping userProfile={props.userProfile}/>

	</div>
)}

*/}
 </div>
		)
}



export default ShippingDashboard;