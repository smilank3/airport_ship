

// show list of operation location and details( which shows the the history )



import React,{useState,useEffect} from 'react';
import sendRequest from '../../lib/sendRequest'
import Table from './Table'
import {Accordion,Card,Button,Modal} from 'react-bootstrap'

import CustomeToggle from './CustomeToggle'
import {FaHistory,FaShippingFast} from 'react-icons/fa'
import Chart from './Chart'
import History from './History'
import DropOffHistory from './DropOffHistory'

const Overview=()=>{

  //modal to show shipping history

  const[show,setShow]=useState(false);

  const [airportLocation,setAirportLocation]=useState(null); //to supply to history comp. and fetch.

  // to fetch data on button value change

  const [state,setState]=useState('shippingHistory')

const [data,setData]=useState([]);


  useEffect(()=>{


        const fetchData=async()=>{


    const res=await sendRequest('/api/admin/getStaffByLocation',{method:'GET'});
  

setData(res.data);
   
  }


 fetchData();
  },[])




	return (


		<div>

<Accordion defaultActiveKey="0" >
{data.map((d,i)=>{


	return (

     <div key={i} style={{margin:'10px'}}>
     <Card  style={{border:'none'}}>



    <Card.Header style={{backgroundColor:'#c3edfa',border:'none'}}>
    	<CustomeToggle eventKey={`${i}`}>  <span style={{fontWeight:700}}> {d._id.airportName}</span><span>, {d._id.airportCity}</span>, <span>{d._id.airportCountry}</span></CustomeToggle>
    </Card.Header>
    <Accordion.Collapse eventKey={`${i}`}>
      <Card.Body>
      	   <Table staffs={d.staffbylocation}/>

      	        <Button size="sm" style={{border:'none', background: '#facb52',
    boxShadow: '0px 5px 50px rgba(250,203,82,0.5)',
    color: '#000',

    fontWeight:500,}} onClick={()=>{setShow(true); return setAirportLocation(d._id)}} >View Shipping History</Button>
      </Card.Body>


    </Accordion.Collapse>
     	
        
     
        </Card>

         <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
        backdrop="static"


      >
        <Modal.Header closeButton>
            <div style={{display:'flex',justifyContent:'space-between'}} >
        <div style={{border:'2px solid purple',padding:'2px 10px',background:state==="shippingHistory"?'purple':'',color:state==="shippingHistory"?'white':'purple',fontWeight:600,marginBottom:'',float:'left',cursor:'pointer',borderRadius:'4px'}}
onClick={()=>{return setState('shippingHistory');}}
        >
        
           <FaHistory size="20px" style={{padding:'2px',marginRight:'4px'}}/>
      <span>Shipping History</span>
        </div>


            <div style={{border:'2px solid purple',marginLeft:'30px',padding:'2px 10px',background:state==="dropOffHistory"?'purple':'',color:state==="dropOffHistory"?'white':'purple',fontWeight:600,marginBottom:'',float:'left',cursor:'pointer',borderRadius:'4px'}}
onClick={()=>{return setState('dropOffHistory');}}
        >
        
           <FaHistory size="20px" style={{padding:'2px',marginRight:'4px'}}/>
      <span>Drop Off History</span>
        </div>


    <div style={{marginLeft:'30px',border:'2px solid purple',padding:'2px 10px',background:state==="flowCharts"?'purple':'',color:state==="flowCharts"?'white':'purple',fontWeight:600,marginBottom:'',float:'right',cursor:'pointer',borderRadius:'4px'}}
onClick={()=>setState('flowCharts')}
  >
  <FaShippingFast size="20px" style={{padding:'1px',marginRight:'4px'}}/>
          <span>Flow charts</span>
   
    </div>
   
  </div>
        </Modal.Header>
        <Modal.Body   style={{minHeight:'70vh'}}>
       
 {state==='shippingHistory'?(
   <History airportLocation={airportLocation}/>
    ): (state==='dropOffHistory')?(<DropOffHistory airportLocation={airportLocation}/>):(
<div style={{marginTop:'70px'}}>
  <Chart />

  </div>
)}
   
        </Modal.Body>
      </Modal>
     </div>
		)
})}
       


</Accordion>



		</div>


		)
}

export default Overview;