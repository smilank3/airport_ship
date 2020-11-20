

// show list of operation location and details( which shows the the history )



import React,{useState,useEffect} from 'react';
import sendRequest from '../../lib/sendRequest'
import Table from './Table'
import {Accordion,Card,Button} from 'react-bootstrap'

import CustomeToggle from './CustomeToggle'


const Overview=()=>{

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

    fontWeight:500,}}>View Shipping History</Button>
      </Card.Body>


    </Accordion.Collapse>
     	
        
     
        </Card>
     </div>
		)
})}
       


</Accordion>
		</div>


		)
}

export default Overview;