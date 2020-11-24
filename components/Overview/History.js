
//TODO  : #34
import React, {useState,useEffect} from 'react';
import {Table,Badge} from 'react-bootstrap'
import sendRequest from '../../lib/sendRequest'
import {formatDate} from '../../utils/formatDate'

const History=({airportLocation})=>{

const [history,setHistory]=useState(null);



	useEffect(()=>{


        const fetchData=async()=>{




    const res=await sendRequest('/api/admin/getPackagesByLocation',{body:JSON.stringify({location:airportLocation.airportName})});



    setTimeout(()=>{

  setHistory(res.packages)
    },10)
 
   
  }


 fetchData();

  },[])


if(!history){  // if history is null  show loading...
  return null;
}

	return (
<div style={{marginTop:'50px',display:'block'}}>
  <h6 style={{marginBottom:'20px',fontWeight:700,color:'purple'}}>{airportLocation.airportName},  {airportLocation.airportCity},  {airportLocation.airportCountry}</h6>
<Table responsive  hover size="sm">
  <thead>
    <tr>
      <th>Id</th>
      <th>Created At</th>
      <th>Shipped Date</th>
      <th>Delivered Date</th>
      <th>Courier</th>
      <th>Cost</th>
      <th>Payment</th>
    </tr>
  </thead>
  <tbody>

  {history.map((h,i)=>{

  	return (

<tr key ={i}>
      <td>{h.packageId}</td>
      <td>{formatDate(h.createdAt)}</td>
      <td>{h.packageShipped.isShipped?(h.packageShipped.date):(<Badge variant="info">not shipped</Badge>)}</td>
      <td>{h.packageDelivered.isDilevered?(h.packageDelivered.date):(<Badge variant="success">not delivered</Badge>)}</td>
      <td>{h.courierCompany}</td>
      <td>${h.totalCost}</td>
      <td>{h.payBy}</td>
    </tr>

  		)
  })}
    
   
  </tbody>
</Table>
</div>

		)
}



export default History;