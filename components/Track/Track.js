
import TextField from '@material-ui/core/TextField';
import {Row,Col} from 'react-bootstrap'
import React,{useState} from 'react'

import Button from 'react-bootstrap/Button'
import {InputGroup,FormControl,Modal} from 'react-bootstrap'

const Track=()=>{

  const [show,setShow]=useState(false);
  const [trackingid,setTrackingid]=useState('')

  // order status 

  const [orderStatus,setOrderStatus]=useState(null)

 const handleClose = () => setShow(false);
  const handleShow = () =>{ 




    if(trackingid===''){
      alert('Enter Tracking Id please')
      return;
    }

    alert('god to database'); 

    // 

  setOrderStatus({orderProcessed:true,orderShipped:true,orderEnRoute:false,orderDelivered:false}); 


  return setShow(true)}
	return (


  <div style={{marginTop:'40px'}}>
  
  
   <Row style={{justifyContent:'center'}}>
   <Col lg={5} md={5} sm={9} xs={9}>
 
   <InputGroup size="" className="mb-3">
    
    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Enter Tracking Id" onChange={(e)=>setTrackingid(e.target.value)} value={trackingid}/>
  </InputGroup>


   </Col>
   <Col lg={1} md={1} sm={3} xs={2} style={{border:'',display:'',padding:'0px',}}>
     <Button variant="primary" size="" style={{padding:''}} onClick={handleShow}>
        Track
      </Button>
   </Col>
   	 
   </Row>
   <Modal show={show} onHide={handleClose}  dialogClassName="modal-90w" >
        <Modal.Header closeButton>
          <Modal.Title>Order Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
  <Modal.Body className="modal-dialog modal-lg">
          <div className="">
    <div className="card">
        <div className="row d-flex justify-content-between px-3 top">
            <div className="d-flex">
                <h5>ORDER <span className="text-primary font-weight-bold">{trackingid}</span></h5>
            </div>
           
        </div> 
        <div className="row d-flex justify-content-center">
            <div className="col-12">
                <ul id="progressbar" className="text-center">
                    <li className={orderStatus && orderStatus.orderProcessed?"active step0 ":"step0"}><span style={{fontWeight:700}}>Processed</span></li>
                    <li className={orderStatus && orderStatus.orderShipped?"active step0 ":"step0"}><span style={{fontWeight:700}}>Shipped</span></li>
                    <li className={orderStatus && orderStatus.orderEnRoute?"active step0 ":"step0"}><span style={{fontWeight:700}}>Route</span></li>
                    <li className={orderStatus && orderStatus.orderDelivered?"active step0 ":"step0"}><span style={{fontWeight:700}}>Delivered</span></li>
                </ul>
            </div>
        </div>
   
    </div>
</div>
        </Modal.Body>
        </Modal.Body>
     
      </Modal>
  
  </div>
		)
}


export default Track;