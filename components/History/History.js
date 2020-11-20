

import React, {useState,useEffect} from 'react';
import {Table,Badge} from 'react-bootstrap'
import sendRequest from '../../lib/sendRequest'
import {formatDate} from '../../utils/formatDate'

const History=({userProfile})=>{

const [history,setHistory]=useState(null);

	useEffect(()=>{


        const fetchData=async()=>{


    const res=await sendRequest('/api/admin/getPackagesByLocation',{body:JSON.stringify({location:userProfile.airportLocation.airportName})});



    setTimeout(()=>{

  setHistory(res.packages)
    },100)
   
  }


 fetchData();

  },[])


if(!history){  // if history is null  show loading...
  return <div className="loading">
    <div className="loader"></div>
</div>
}

	return (
<div style={{marginTop:'50px',display:'block'}}>
  <h4 style={{marginBottom:'20px'}}>{userProfile.airportLocation.airportName},  {userProfile.airportLocation.airportCity},  {userProfile.airportLocation.airportCountry}</h4>
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