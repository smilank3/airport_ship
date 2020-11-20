import React from 'react';
import Table from './Table';
import Form from './Form';
import {Button} from 'react-bootstrap'


class Container extends React.Component {
    
    state={
         packages:[],
    }


    removePackage = async ({index,no_of_packages,weight_per_package,dimension_per_package}) => {
      
  
   
      	  // delete from display table
      	  this.state.packages.splice(index,1);


      	  this.setState([...this.state.packages]);


    }

    handleSubmit = favLink => {
   

   
        this.setState((prev,current)=>(
               {locations:prev.locations.concat(favLink)}
            ))
    }

    render() {

        return (
            <div className="container">
                <h2 style={{fontFamily:'georgia',borderBottom:'',marginBottom:'10px', fontWeight:600}}>Packaging</h2>
             
 
                               <Table packages={this.state.packages} removeLocation={this.removePackage.bind(this)}/>
                <br/>

                <h4 style={{fontFamily:'georgia',borderBottom:'',marginBottom:'10px', fontWeight:600}}>Add New package </h4>
                <div style={{border:'1px solid purple',padding:"10px",borderRadius:'6px',marginTop:'80px'}}><Form  addNew={this.handleSubmit.bind(this)}/>

                </div>


                
            </div>
        );
    }
}

export default Container;