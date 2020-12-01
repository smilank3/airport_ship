

import React, {useState,useEffect} from 'react';
import {Table,Badge} from 'react-bootstrap'
import sendRequest from '../../lib/sendRequest'
import {formatDate} from '../../utils/formatDate'


// get order history  by email address.
const UserDropOffHistory=({userProfile})=>{

const [history,setHistory]=useState(null);



	useEffect(()=>{


        const fetchData=async()=>{




    const res=await sendRequest('/api/admin/getDropOffPackagesByEmail',{body:JSON.stringify({email:userProfile.email})});



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
      <td>{h.packageId} </td>
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

{history && !history.length?<div><Badge variant="info" style={{fontSize:'20px'}}>No history</Badge></div>:null}

</div>
</div>

		)
}



export default UserDropOffHistory;