

import React from 'react';
import {Nav} from 'react-bootstrap'
import {logout} from '../lib/auth'

import Router from 'next/router'

const NavProfile=(props)=>{



if(props.isAuthenticated){
            return (<Nav>
    	
      <Nav.Link href={(props.userProfile.role==="manager") || (props.userProfile.role==='admin')?"/admin/dashboard":
      props.userProfile.role==="kiosk clerk"?"/kiosk/dashboard":(props.userProfile.role==='staff')?"/staff/dashboard":'/dashboard'}
      



       style={{fontWeight:500,color:'purple',marginLeft:'20px'}}>Dashboard</Nav.Link>
      <Nav.Link href={(props.userProfile.role==="manager") || (props.userProfile.role==='admin')?"/admin/profile":
      props.userProfile.role==="kiosk clerk"?"/kiosk/personnel":(props.userProfile.role==='staff')?"/staff/profile":'/profile'}
      

       style={{fontWeight:500,color:'purple',marginLeft:'20px'}}>Profile</Nav.Link>
      <Nav.Link eventKey={2} href="/login" style={{fontWeight:500,color:'purple',marginLeft:'20px'}}

      onClick={()=>logout()}>
        Log out
      </Nav.Link>
    </Nav>
    		)}

 



 return(
				<Nav>
				    		
     <Nav.Link href="/signup" style={{ fontWeight: 600, color: '', marginLeft: '20px', color: ' rgb(253, 253, 253)'}}>Create account</Nav.Link>
     <Nav.Link eventKey={2} href="/login" style={{ fontWeight: 600, color: '', marginLeft: '20px', color: ' rgb(253, 253, 253)'}}>
				        Login
				      </Nav.Link>
				    </Nav>

 	)
           
       
}



export default NavProfile;