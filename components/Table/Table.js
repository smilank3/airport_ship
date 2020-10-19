import React from 'react';

import {Table} from 'react-bootstrap';

import Data from '../../data/airports'




export default function DataTable() {
console.log(Data)

  return (
<div style={{marginTop:'40px'}}>
<h3 >Our locations :</h3>

<Table striped bordered hover variant="dark" size="">
  <thead>
    <tr>
     
      <th>City</th>
      <th>State</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>

  {Data.map((row,index)=>{

      return (<tr key={index}>
     
      <td>{row.city}</td>
      <td>{row.state}</td>
      <td>{row.country}</td>
    </tr>)
  })}
 
    
  </tbody>
</Table>

    </div>
  );
}