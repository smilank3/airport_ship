

import React, {useState,useEffect} from 'react';
import {Table,Badge} from 'react-bootstrap'
import sendRequest from '../../lib/sendRequest'
import {formatDate} from '../../utils/formatDate'


// get order history  by email address.
const OrderHistory=({userProfile})=>{

const [history,setHistory]=useState(null);



	useEffect(()=>{


        const fetchData=async()=>{




    const res=await sendRequest('/api/admin/getPackagesByEmail',{body:JSON.stringify({email:userProfile.email})});


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
<div style={{background:'#f0dfdf',padding:'10px',minHeight:'50vh'}} >
  
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
{history && !history.length?<div><Badge variant="info" style={{fontSize:'20px',texAlign:'center'}}>No history</Badge></div>:null}
</div>

</div>

		)
}



export default OrderHistory;