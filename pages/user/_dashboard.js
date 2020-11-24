

import sendRequest from '../../lib/sendRequest'

import {FaHistory,FaShippingFast} from 'react-icons/fa'

import OrderHistory from './OrderHistory'
import React from 'react'

class Dashboard extends React.Component{






    render(){


    	return (<div>
    		
           <div style={{marginTop:''}}>
 	

   	<div style={{display:'flex',justifyContent:'space-between'}} >
	
    <div style={{border:'2px solid purple',padding:'2px 10px',background:'purple',color:'white',fontWeight:600,marginBottom:'',float:'right',cursor:'pointer',borderRadius:'4px'}}
onClick={()=>alert('get history')}
  >
    <FaHistory size="20px" style={{padding:'2px',marginRight:'4px'}}/>
      <span>History</span>
    </div>
   
  </div>



  <OrderHistory userProfile={this.props.userProfile} />
    
 </div>
    	</div>)
    }
}

export default Dashboard;