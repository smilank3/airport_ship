import React from 'react';
import Table from './List';
import Form from './Form';
import {Button} from 'react-bootstrap'
import sendRequest from '../../lib/sendRequest'

class Container extends React.Component {
    
    state={
        locations:[]
    }


    componentDidMount=async()=>{

      const {locations}=await sendRequest('/api/admin/getAllLocations',{method:'GET'});

setTimeout(()=>{

   this.setState({locations:locations})
},200)

        
      

    }

    removeLocation = async ({index,name,city,country}) => {
      
     /*
        this.state.locations.splice(index,1);

     

        this.setState([...this.state.locations])
      */




      // delete location in database

      try{
      	 let res=await sendRequest('/api/admin/deleteLocation',{body:JSON.stringify({name,city,country})})
             console.log(res)
      	 // if res is ok

      	  // delete from display table
      	  this.state.locations.splice(index,1);

      	  // new location after splice

      	  this.setState([...this.state.locations]);

      }catch(err){
      	alert(err.message);

      	return;
      }


    }

    handleSubmit = favLink => {
        
  
        this.setState((prev,current)=>(
               {locations:prev.locations.concat(favLink)}
            ))
    }

    render() {


if(!this.state.locations.length){
  return <div class="loading">
    <div class="loader"></div>
</div>
}


        return (
            <div >
                <h2 style={{fontFamily:'georgia',borderBottom:'',marginBottom:'10px', fontWeight:600}}>Company's operating locations</h2>
             
 
                               <Table locations={this.state.locations} removeLocation={this.removeLocation.bind(this)}/>
                <br/>

                <h4 style={{fontFamily:'georgia',borderBottom:'',marginBottom:'10px', fontWeight:600}}>Add New Location </h4>
                <div style={{border:'1px solid purple',padding:"10px",borderRadius:'6px'}}><Form  addNew={this.handleSubmit.bind(this)}/>

                </div>


                
            </div>
        );
    }
}

export default Container;