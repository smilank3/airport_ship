
import React,{useState,useEffect} from 'react'
import {Nav} from 'react-bootstrap';
import sendRequest from '../lib/sendRequest'

import {FaUserFriends} from 'react-icons/fa';
import {TiLocation,TiPlane} from 'react-icons/ti'
import ManageStaff from '../components/ManageStaff/ManageStaff'
import Locations from '../components/Locations/Locations'

import Overview from '../components/Overview/Overview';

import {Container,Row,Col} from 'react-bootstrap';

const AdminTest=(props)=>{

	// 
  const [nav,setNav]=useState({navName:'manageStaff',data:[]})

useEffect(()=>{


    setNav({navName:'manageStaff'})



 
  
},[])

	return (


		<div style={{marginTop:'100px'}}>

			

    <Row>
 <Col sm={12} xs={12} md={12} >
<Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>

      <Nav.Link  onClick={()=>setNav({navName:'manageStaff'})} style={{border:'1px solid purple',padding:'0px',margin:'0px 9px',marginBottom:'10px',backgroundColor:nav.navName==="manageStaff"?'purple':''}}> 
      <FaUserFriends size="29" fill={nav.navName==="manageStaff"?'#efefef':'black'} style={{padding:'4px',margin:'0px 5px',paddingLeft:'0px'}}/>
      <span style={{color:nav.navName==="manageStaff"?'#efefef':'purple',fontWeight:600,paddingRight:'10px'}}>Manage Staff</span>
      </Nav.Link>
    </Nav.Item>


    <Nav.Item>
     <Nav.Link  onClick={()=>setNav({navName:'businessLocations'})} style={{border:'1px solid purple',padding:'0px',margin:'0px 9px',marginBottom:'10px',backgroundColor:nav.navName==="businessLocations"?'purple':''}}> 
      <TiLocation size="29" fill={nav.navName==="businessLocations"?'#efefef':'black'} style={{padding:'4px',margin:'',paddingLeft:'0px'}}/>
      <span style={{color:nav.navName==="businessLocations"?'#efefef':'purple',fontWeight:600,paddingRight:'10px'}}>Business Locations</span>
      </Nav.Link>
    </Nav.Item>



    <Nav.Item>
     <Nav.Link  onClick={()=>setNav({navName:'overview'})} style={{border:'1px solid purple',padding:'0px',margin:'0px 9px',marginBottom:'10px',backgroundColor:nav.navName==="overview"?'purple':''}}> 
      <TiPlane size="29" fill={nav.navName==="overview"?'#efefef':'black'} style={{padding:'4px',margin:'',paddingLeft:'0px'}}/>
      <span style={{color:nav.navName==="overview"?'#efefef':'purple',fontWeight:600,paddingRight:'10px'}}>Overview</span>
      </Nav.Link>
    </Nav.Item>
   
  </Nav>
  </Col>

  </Row>

			

      <div style={{marginTop:'50px'}}>


      {
        nav.navName==="manageStaff"?(<ManageStaff  />):nav.navName==="overview"?(<Overview/>):(<Locations/>)
      }

</div>
       
 
       
		</div>)
}



export default AdminTest;