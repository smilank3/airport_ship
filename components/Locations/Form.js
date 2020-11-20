
import React,{useState} from 'react'
import {Form,Col,Button} from 'react-bootstrap'

import sendRequest from '../../lib/sendRequest'
import states from '../SignUp/states'
const Form_=(props)=>{

	  const [location,setLocation]=useState({name:'',city:'',country:''})


var handleChange=(e)=>{
	console.log(e.target.name)
	console.log(e.target.value)

	setLocation({
		...location,
		[e.target.name]:e.target.value,
	})
}


var handleSubmit=async(e)=>{
	e.preventDefault();


	console.log(location)





	// update database;

 try{
 	let res=await sendRequest('/api/admin/addLocation',{body:JSON.stringify(location)});
 	console.log(res)

 	    // to show on Table
	props.addNew(location)
    

	// reset
	setLocation({name:'',city:'',state:'',country:''})

 }catch(err){
 	alert(err.message)
 	return;
 }


}

	return (

         
        <Form onSubmit={handleSubmit} >

          <Form.Row>
            <Form.Group as={Col} md="5" sm="12" xs="12" controlId="validationCustom03">
          <Form.Label>Airport Name</Form.Label>
          <Form.Control type="text" placeholder="name" onChange={handleChange} autoComplete="off"   required value={location.name} name="name" />
       
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" onChange={handleChange} autoComplete="off"   required value={location.city} name="city" />
       
        </Form.Group>
        {/*}
        <Form.Group as={Col} md="2" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control as='select' placeholder="State" onChange={handleChange} required  value={location.state} name="state" >

       <option>Choose...</option>
               {states.map((s,i)=>(
                  <option value={`${s}`} key={i}>{s}</option>))}></Form.Control>
        
        </Form.Group>
    */}
        <Form.Group as={Col} md="2" controlId="validationCustom05">
          <Form.Label>Country</Form.Label>
        <Form.Control as='select' placeholder="State" onChange={handleChange} required  value={location.country} name="country" >
    <option>choose...</option>
       <option>Canada</option>
       <option>United States</option>
              
                </Form.Control>
        </Form.Group>
      </Form.Row>

       <Button variant="" size="sm" type="submit" style={{
    background: '#facb52',
    boxShadow: '0px 5px 50px rgba(250,203,82,0.5)',
    color: '#000',
    width:'',
    fontWeight:500,
    marginBottom:'20px'
  }}>
    Add new Location
  </Button>
        </Form>
		)
}

export default Form_;