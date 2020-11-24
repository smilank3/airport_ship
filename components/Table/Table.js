import React,{useState,useEffect} from 'react';

import {Table} from 'react-bootstrap';


import sendRequest from '../../lib/sendRequest'



const  DataTable=(props)=>{


const [locations,setLocations]=useState([]);


  useEffect(()=>{


        const fetchData=async()=>{


    const res=await sendRequest('/api/admin/getAllLocations',{method:'GET'});

setTimeout(()=>{

 setLocations(res.locations)
},100)
   
  }


 fetchData();
  },[])





  return (
<div style={{marginTop:'40px'}}>
<h3 >Our locations :</h3>


      <Table striped bordered hover variant="dark" size="" style={{ marginTop: '40px', backgroundColor: 'rgb(54, 54, 115)' }}>
  <thead>
    <tr>
     
      <th>Name</th>
      <th>City</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>

  {locations.map((row,index)=>{

      return (<tr key={index}>
     
      <td>{row.name}</td>
      <td>{row.city}</td>
      <td>{row.country}</td>
    </tr>)
  })}
 
    
  </tbody>
</Table>

    </div>
  );
}

export default DataTable;