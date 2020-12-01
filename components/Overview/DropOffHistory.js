

import React, {useState,useEffect} from 'react';
import {Table,Badge,Modal} from 'react-bootstrap'
import sendRequest from '../../lib/sendRequest'
import {formatDate} from '../../utils/formatDate'

import {Row,Col,Form,FormControl,InputGroup,Button} from 'react-bootstrap'

const History=({airportLocation})=>{

const [history,setHistory]=useState(null);
 


/*

var date1 = new Date(); // current date
var date2 = new Date("06/26/2018"); // mm/dd/yyyy format
var timeDiff = Math.abs(date2.getTime() - date1.getTime()); // in miliseconds
var timeDiffInSecond = Math.ceil(timeDiff / 1000); // in second*/

// matched package

const [package_,setPackage_]=useState(null);



	useEffect(()=>{


        const fetchData=async()=>{




    const res=await sendRequest('/api/admin/getDropOffPackagesByLocation',{body:JSON.stringify({location:airportLocation.airportName})});

console.log(res)

    setTimeout(()=>{

  setHistory(res.packages)
    },90)
 
   
  }


 fetchData();

  },[])



//




if(!history){  // if history is null  show loading...
  return <div className="loading">
    <div className="loader"></div>
</div>
}

	return (
<div style={{marginTop:'50px',display:'block',padding:'10px',background:'#ebe6e6',minHeight:'50vh'}}>

 

  <h6 style={{marginBottom:'20px',color:'purple',fontWeight:700}}>{airportLocation.airportName},  {airportLocation.airportCity},  {airportLocation.airportCountry}</h6>
<Table responsive bordered  hover size="sm">

  <thead>
    <tr>
      <th>Tracking Id </th>
      <th>Stored Date</th>
   
      <th>Pickup Date</th>
      <th>Pickup By</th>

     
      <th>Intial payment</th>
      <th>Time Usage</th>
      <th>Final payment</th>
      <th>Processed By </th>
      
    </tr>
  </thead>
  <tbody>

  {history.map((h,i)=>{

  	return (

<tr key ={i} style={{fontSize:'16px',fontFamily:''}}>
      <td>{h.packageId} {h.packageId===trackingid?(<Badge variant='danger' style={{cursor:'pointer'}} onClick={()=>{setShow(true); 
    /* go to history and filter the match tracking id and show the information*/
let matchedfirst=history.filter(h=>h.packageId===trackingid)[0];


        return setPackage_(matchedfirst);}}>see details</Badge>):null}</td>
      <td>{formatDate(h.stored.date)}</td>
      <td>{h.pickUp.isPickedUp?'some':'n/a'}</td>
      <td>{h.pickUp.isPickedUp?'some':'n/a'}</td>
      <td>$13</td>
      <td>{h.pickUp.isPickedUp?'some':'n/a'}</td>
      <td>$55 </td>
        <td>{h.processedBy}</td>
     
    </tr>

  		)
  })}
    
   
  </tbody>
</Table>


</div>

		)
}



export default History;