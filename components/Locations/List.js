

import React from 'react';
import  {Table,Button} from 'react-bootstrap'
import {MdCancel} from 'react-icons/md'

const TableHeader = () => { 
 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>City</th>
        
                <th>Country</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 

    const rows = props.locations.map((row, index) => {
        return (
            <tr key={index}>

                <td>{row.name}</td>
                <td>{row.city}</td>
                
                <td><a >{row.country}</a></td>
                <td> <MdCancel size="24px" fill="#cf1406" style={{marginLeft:'10px'}} onClick={() => props.removeLocation({index:index,name:row.name,city:row.city,country:row.country})}/> </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table_ = (props) => {
const { locations, removeLocation } = props;


   return <Table striped  hover responsive size="" > 
   <TableHeader/>
    
      <TableBody locations={locations}  removeLocation={removeLocation}/>

   </Table>

}

export default Table_;