

import React, {useState,useEffect} from 'react';
import {Table,Badge,Modal} from 'react-bootstrap'
import sendRequest from '../../lib/sendRequest'
import {formatDate} from '../../utils/formatDate'

import {Row,Col,Form,FormControl,InputGroup,Button} from 'react-bootstrap'


// get time difference in second

const TimeDiff=(storedDate)=>{

var currentDate = new Date(); // current date
var _StoredDate = new Date(storedDate); // mm/dd/yyyy format
var timeDiff = Math.abs(_StoredDate.getTime() - currentDate.getTime()); // in miliseconds
var timeDiffInSecond = Math.ceil(timeDiff / 1000); // in second*/

return Number(timeDiffInSecond/60).toFixed(0);

}

const History=({userProfile})=>{

const [history,setHistory]=useState(null);
  const [trackingid,setTrackingid]=useState('')


const [show,setShow]=useState(false)

/*

var date1 = new Date(); // current date
var date2 = new Date("06/26/2018"); // mm/dd/yyyy format
var timeDiff = Math.abs(date2.getTime() - date1.getTime()); // in miliseconds
var timeDiffInSecond = Math.ceil(timeDiff / 1000); // in second*/

// matched package

const [package_,setPackage_]=useState(null);


// usage time 

const [usageTime,setUsageTime]=useState(0);

const [pickUpBy,setPickUpBy]=useState('choose...');
const [pickUpDate,setPickUpDate]=useState(null);



	useEffect(()=>{


        const fetchData=async()=>{




    const res=await sendRequest('/api/admin/getDropOffPackagesByLocation',{body:JSON.stringify({location:userProfile.airportLocation.airportName})});



    setTimeout(()=>{

  setHistory(res.packages)
    },90)
 
   
  }


 fetchData();

  },[])



//


  const onSubmit=(e)=>{
  e.preventDefault();


    if(trackingid===''){
      alert('Enter Tracking Id please')
      return;
    }




    // show mathed not found if not matched



    if(!history.some(h=>{return h.packageId===trackingid})){
      alert('No match found. please Enter the correct Id.');
      return;
    }


   
  }



if(!history){  // if history is null  show loading...
  return <div className="loading">
    <div className="loader"></div>
</div>
}

	return (
<div style={{marginTop:'50px',display:'block',padding:'10px',background:'#ebe6e6',minHeight:'50vh'}}>

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

  <h6 style={{marginBottom:'20px',color:'purple',fontWeight:700}}>{userProfile.airportLocation.airportName},  {userProfile.airportLocation.airportCity},  {userProfile.airportLocation.airportCountry}</h6>
<Table responsive  hover size="sm">

  <thead>
    <tr>
      <th>Tracking Id </th>
      <th>Stored Date</th>
   
      <th>Pickup Date</th>
      <th>Pickup By</th>

     
      <th>Intial payment</th>
      <th>Time Usage</th>
      <th>Final payment</th>
      <th>Processed By</th>
      <th>Status </th>
      
    </tr>
  </thead>
  <tbody>

  {history.map((h,i)=>{

  	return (

<tr key ={i} style={{fontSize:'16px',fontFamily:''}}>
      <td>{h.packageId} {h.packageId===trackingid?(<Badge variant='primary' style={{cursor:'pointer'}} onClick={()=>{setShow(true); 
    /* go to history and filter the match tracking id and show the information*/
let matchedfirst=history.filter(h=>h.packageId===trackingid)[0];

console.log(matchedfirst)
// set time usage difference
let usageT=matchedfirst.pickUp.usageTime?matchedfirst.pickUp.usageTime:TimeDiff(matchedfirst.stored.date);
console.log(usageT)

setUsageTime(usageT);

// set date
setPickUpDate(new Date());
        return setPackage_(matchedfirst);}}>see details</Badge>):null}</td>
      <td>{formatDate(h.stored.date)}</td>
      <td>{h.pickUp.isPickedUp?`${formatDate(h.pickUp.date)}`:'n/a'}</td>
      <td>{h.pickUp.isPickedUp?`${h.pickUp.pickUpBy}`:'n/a'}</td>
      <td>$13</td>
      <td>{h.pickUp.usageTime?`${h.pickUp.usageTime}`:`${TimeDiff(h.stored.date)}`}</td>
      <td>{h.pickUp.isPickedUp?`${h.pickUp.finalPayment}`:'n/a'} </td>
      <td>{h.processedBy}</td>

      <td>{h.pickUp.isPickedUp?<Badge variant="success">done</Badge>:TimeDiff(h.stored.date)<=300?(<Badge variant='success' style={{cursor:'pointer'}}>active</Badge>):
        TimeDiff(h.stored.date)<=362?(<Badge variant='warning' style={{cursor:'pointer'}}>overDue</Badge>):

        (<Badge variant='danger' style={{cursor:'pointer'}}>auctioned</Badge>)} </td>

     
    </tr>

  		)
  })}
    
   
  </tbody>
</Table>


       {!package_?null:(<Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
        backdrop="static"
centered

      >
        <Modal.Header closeButton>
           <h4 style={{fontWeight:700,color:'purple'}}>Tracking Id : {trackingid}</h4>
        </Modal.Header>
        <Modal.Body   style={{minHeight:'70vh'}}>
       

<div className="row">
       <div className="col-md-6">
       <h5>Drop Off By</h5>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {package_.senderFirstName}  {package_.senderLastName}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {package_.senderEmail}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                   {package_.senderPhone}
                    </div>
                  </div>
                  <hr/>
             
          
                
                </div>
              </div>
            
            </div>
 
      <div className="col-md-6">

      <h5>Expected Pickup By</h5>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {package_.receiverFirstName} {package_.receiverLastName}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {package_.receiverEmail}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                   {package_.receiverPhone}
                    </div>
                  </div>
                  <hr/>
             
                  
                </div>
              </div>
            
            </div>
</div>

<div>

<h5> After time usage exceeds 362 mins we charge $0.067 per minutes</h5>

<h6 style={{color:'purple'}}>Extra Usage time <span style={{color:'black'}}>{usageTime} mins</span> : {usageTime<=300?
  (<Badge variant='success' style={{cursor:'pointer'}}>No Extra charge</Badge>):usageTime<=362?
  (<Badge variant='info' style={{cursor:'pointer'}}>{362-usageTime} minutes</Badge>):
(<Badge variant='danger' style={{cursor:'pointer'}}>Auctioned Already</Badge>)}  </h6> 

<div  style={{display:usageTime>362 || package_.pickUp.isPickedUp?'none':''}}>
<h6 style={{color:'purple'}}>Total amount(additional) : <span>$ {usageTime>300?(Number(Number(usageTime-300)*0.067).toFixed(2)):0.0}</span></h6> 



<Form onSubmit={async(e)=>{

e.preventDefault()
     alert('onSubmit')

     if(pickUpBy==='choose...'){

      alert('please choose pickUpBy')
      return ;
     }

//ToDo: logic needs improvement .
let extraCost=usageTime>300?(Number(Number(usageTime-300)*0.067).toFixed(2)):0;



     const post={orderId:package_.orderId,data:{date:pickUpDate,isPickedUp:true,pickUpBy,usageTime,finalPayment:Number(Number(package_.stored.initialPayment)+Number(extraCost))}}



     // update order/package

    const res=await sendRequest('/api/admin/updateDropOffPackage',{body:JSON.stringify({query:post})});
   

    if(res.error){
      alert(res.error)
      return;
    }


    setShow(false);


        



} }>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{fontWeight:700,}}>PickUp By</Form.Label>
    <Form.Control as="select" placeholder="" size="sm" style={{maxWidth:'300px'}} onChange={(e)=>setPickUpBy(e.target.value)}>
        <option>{pickUpBy} </option>

{package_.senderFirstName.toLowerCase()===package_.receiverFirstName.toLowerCase()?<option>{package_.senderFirstName} {package_.senderLastName}</option>:
   (<>
   <option>{package_.senderFirstName} {package_.senderLastName}</option>
        <option>{package_.receiverFirstName} {package_.receiverLastName}</option>
   </>)
}
        
    </Form.Control>

  </Form.Group>

  <Button variant="primary" type="submit" size="sm" style={{
    background: '#facb52',
    boxShadow: '0px 5px 50px rgba(250,203,82,0.5)',
    color: '#000',
    width:'',
    fontWeight:500,
    marginBottom:'20px',
    border:'none'
  }}>
    Confirm Pickup
  </Button>
</Form>
</div>
  
</div>
   
        </Modal.Body>
      </Modal>)}
</div>

		)
}



export default History;