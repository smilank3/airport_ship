

import React from 'react';
import  {Table,Button} from 'react-bootstrap'
import {MdCancel} from 'react-icons/md'

const TableHeader = () => { 
    // boilerplate table header functional component
    return (
        <thead>
            <tr>
                <th>UserId</th>
                <th>Name</th>
        
                <th>Email</th>
                <th>Role</th>
             {/*}   <th>Permission lv</th>*/}
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    // boilerplate table body functional component 
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.staffs.map((row, index) => {
        return (
            <tr key={index}>

                <td>{row.userId}</td>
                <td>{row.name}</td>
                
                <td><a >{row.email}</a></td>
                <td><a >{row.role}</a></td>
             {/*}   <td><a >{row.permission}</a></td>*/}
             
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table_ = (props) => {
const { staffs } = props;


   return <Table  bordered responsive hover size="sm"  > 
   <TableHeader/>
    
      <TableBody staffs={staffs} />

   </Table>

}

export default Table_;