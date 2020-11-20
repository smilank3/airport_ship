
import {Button,Form,Row,Col,InputGroup,FormControl,ListGroup,Badge}  from 'react-bootstrap';
import React, {useState,useEffect} from 'react'

import sendRequest from '../lib/sendRequest'
const Simulate=(props)=>{

	const [trackingid,setTrackingid]=useState('')

	const [order,setOrder]=useState(null)

	const onSubmit=async(e)=>{

		e.preventDefault();


		if(trackingid===''){
			alert('Enter Tracking Id please')
			return;
		}

		// query the trackingid from database and check status and allow to modify status.

    alert(trackingid)

    let res=await sendRequest('/api/admin/getShippingStatusByTrackingId',{body:JSON.stringify({trackingid})})


    if(res.error){
      alert(res.error)
      return;
    }else{
      

const {packageShipped,packageDelivered,packageProcessed}=res.package_;

setOrder({packageProcessed,packageShipped,packageDelivered});
    }

		
	}

	useEffect(()=>{

		setTrackingid('');
		setOrder(null)

	},[])

	const updateOrder=async(e)=>{
		e.preventDefault();



let name=e.target.name;

		// update the database based on target name

		//and change the state


let ex=name==="packageShipped"?'isShipped':name==="packageProcessed"?"isProcessed":"isDelivered";


  let res=await sendRequest('/api/admin/updatePackage',{body:JSON.stringify({trackingId:trackingid,data:{[`${name}`]:{date:new Date(),[`${ex}`]:true}}})});
  if(res.error){
    alert(res.error);
    return;
  }

		setOrder({
		...order,
			[`${name}`]:{date:new Date(),[`${ex}`]:true}})
	
	}

	return (


        <div>

          <Form onSubmit={onSubmit}>
   <Row style={{justifyContent:'center'}}>
   <Col lg={5} md={5} sm={9} xs={9}>
 
   <InputGroup size="sm" className="mb-3">
    
    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Enter Tracking Id" onChange={(e)=>setTrackingid(e.target.value)} value={trackingid}/>
  </InputGroup>


   </Col>
   <Col lg={1} md={1} sm={3} xs={2} style={{border:'',display:'',padding:'0px',}}>
     <Button  type="submit" variant="primary" size="sm" style={{padding:''}}>
        scan
      </Button>
   </Col>
   	 
   </Row>

  
   </Form>
        	

        	<Row style={{justifyContent:'center',marginTop:'50px',display:!order?'none':''}}>
        	<ListGroup>
        	 <ListGroup.Item><Button name="packageProcessed" att="isProcessed" disabled={order && order.packageProcessed.isProcessed?true:false} >Order Delivered</Button>

        	  {order && order.packageProcessed.isProcessed?(<Badge variant="success"  style={{marginLeft:'10px'}}>Done</Badge>):null}

        	 </ListGroup.Item>

  <ListGroup.Item><Button name="packageShipped" disabled={order && order.packageShipped.isShipped?true:false}  onClick={updateOrder}>Order shipped</Button>

 {order && order.packageShipped.isShipped?(<Badge variant="success"  style={{marginLeft:'10px'}}>Done</Badge>):null}

  </ListGroup.Item>





  <ListGroup.Item><Button name="packageDelivered" disabled={order && order.packageDelivered.isDelivered?true:false} onClick={updateOrder}>Order Delivered</Button>

{order && order.packageDelivered.isDelivered?(<Badge variant="success" style={{marginLeft:'10px'}}>Done</Badge>):null}

  </ListGroup.Item>

</ListGroup>
        	</Row>
              
             


        </div>
		)
}


export default Simulate;