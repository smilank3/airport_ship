
import {Nav,Table,Row,Col} from 'react-bootstrap'
import React, {useState} from 'react'
import {FaHistory,FaShippingFast,FaBoxOpen} from 'react-icons/fa'

import CreateShipping from '../../components/CreateShipping/CreateShipping'
import History from '../../components/History/History'
import DropOffHistory from '../../components/History/DropOffHistory'
import DropPackage from '../../components/DropPackage/DropPackage'


const Dashboard=(props)=>{

	const [state,setState]=useState('history')

	return (
 <div style={{marginTop:'100px'}}>
 	


      <Row>
 <Col sm={12} xs={12} md={12} >
<Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>

      <Nav.Link  onClick={()=>setState('newShipping')} style={{border:'2px solid purple',padding:'0px',margin:'0px 9px',marginBottom:'10px',backgroundColor:state==="newShipping"?'purple':''}}> 
      <FaShippingFast size="29" fill={state==="newShipping"?'#efefef':'black'} style={{padding:'4px',margin:'0px 5px',paddingLeft:'0px'}}/>
      <span style={{color:state==="newShipping"?'#efefef':'purple',fontWeight:600,paddingRight:'10px'}}>create Shipping</span>
      </Nav.Link>
    </Nav.Item>


    <Nav.Item>
     <Nav.Link  onClick={()=>setState('dropPackage')} style={{border:'2px solid purple',padding:'0px',margin:'0px 9px',marginBottom:'10px',backgroundColor:state==="dropPackage"?'purple':''}}> 
      <FaBoxOpen size="29" fill={state==="dropPackage"?'#efefef':'black'} style={{padding:'4px',margin:'0px 4px',paddingLeft:'0px'}}/>
      <span style={{color:state==="dropPackage"?'#efefef':'purple',fontWeight:600,paddingRight:'10px'}}>Drop Off Package</span>
      </Nav.Link>
    </Nav.Item>



    <Nav.Item>
     <Nav.Link  onClick={()=>setState('history')} style={{border:'2px solid purple',padding:'0px',margin:'0px 9px',marginBottom:'10px',backgroundColor:state==="history"?'purple':''}}> 
      <FaHistory size="29" fill={state==="history"?'#efefef':'black'} style={{padding:'4px',margin:'',margin:'0px 3px'}}/>
      <span style={{color:state==="history"?'#efefef':'purple',fontWeight:600,paddingRight:'10px'}}>Shipping History</span>
      </Nav.Link>
    </Nav.Item>
      <Nav.Item>
     <Nav.Link  onClick={()=>setState('dropOff')} style={{border:'2px solid purple',padding:'0px',margin:'0px 9px',marginBottom:'10px',backgroundColor:state==="dropOff"?'purple':''}}> 
      <FaHistory size="29" fill={state==="dropOff"?'#efefef':'black'} style={{padding:'4px',margin:'',margin:'0px 3px'}}/>
      <span style={{color:state==="dropOff"?'#efefef':'purple',fontWeight:600,paddingRight:'10px'}}>Drop Off History</span>
      </Nav.Link>
    </Nav.Item>
   
  </Nav>
  </Col>

  </Row>


  {state==='history'?(
  <History userProfile={props.userProfile} />
    ):state==='newShipping'?(
<div style={{marginTop:'70px'}}>
	<CreateShipping userProfile={props.userProfile}/>

	</div>
):state==='dropOff'?(<div>

 
<DropOffHistory userProfile={props.userProfile}/>

</div>):(<DropPackage userProfile={props.userProfile}/>)}
 </div>
		)
}



export default Dashboard;