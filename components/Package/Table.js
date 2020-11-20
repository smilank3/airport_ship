

import React from 'react';
import  {Table,Button} from 'react-bootstrap'

const TableHeader = () => { 
    
    return (
        <thead>
            <tr>
                <th>Name </th>
                <th>No. of packages</th>
                <th>Weight per Package</th>
        
                <th>Dimension per package</th>
              
            </tr>
        </thead>
    );
}

const TableBody = props => { 
  
    const rows = props.packages.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.package_name}</td>
                <td>{row.no_of_packages}</td>
                <td>{row.weight_per_package}</td>
                
                <td><a >{row.dimension_per_package}</a></td>
                <td><Button variant="danger" size="sm" style={{padding:'0px 4px'}} onClick={() => props.removePackage({index:index,no_of_packages:row.no_of_packages,weight_per_package:row.weight_per_package,dimension_per_package:row.dimension_per_package})}>Delete</Button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table_ = (props) => {
const { packages, removePackage } = props;




   return <Table bordered  responsive striped responsive hover size=""  > 
   <TableHeader/>
    
      <TableBody packages={packages}  removePackage={removePackage}/>

   </Table>

}

export default Table_;
