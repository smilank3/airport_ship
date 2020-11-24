

import React, {useState,useEffect} from 'react';
import {Table,Badge} from 'react-bootstrap'
import sendRequest from '../../lib/sendRequest'
import {formatDate} from '../../utils/formatDate'


// get order history  by email address.
const OrderHistory=({userProfile})=>{

const [history,setHistory]=useState(null);

console.log(userProfile)

	useEffect(()=>{


        const fetchData=async()=>{




    const res=await sendRequest('/api/admin/getPackagesByEmail',{email:JSON.stringify({location:userProfile.email})});

console.log(res)

    setTimeout(()=>{

  setHistory(res.packages)
    },90)
 
   
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

  
<Table responsive  hover size="sm">

  <thead>
    <tr>
      <th>Tracking Id</th>
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
      <td>{h.packageShipped.isShipped?(formatDate(h.packageShipped.date)):(<Badge variant="info">not shipped</Badge>)}</td>
      <td>{h.packageDelivered.isDelivered?(formatDate(h.packageDelivered.date)):(<Badge variant="success">not delivered</Badge>)}</td>
      <td>{h.courierCompany}</td>
      <td>${h.totalCost}</td>
      <td>{h.payBy}</td>
    </tr>

  		)
  })}
    
   
  </tbody>
</Table>

{history && !history.length?<div><Badge variant="info" >No history</Badge></div>:null}
</div>

		)
}



export default OrderHistory;