
import React,{useState} from 'react'
import {Form,Col,Button} from 'react-bootstrap'

import sendRequest from '../../lib/sendRequest'

const Form_=(props)=>{

	  const [packages,setPackages]=useState({package_name:'',no_of_packages:'',weight_per_package:'',dimension_per_package:''})


var handleChange=(e)=>{


	setPackages({
		...packages,
		[e.target.name]:e.target.value,
	})
}


var handleSubmit=async(e)=>{
	e.preventDefault();








 	    // to show on Table
	props.addNew(packages)
    

	// reset
	setPackages({package_name:'',no_of_packages:'',weight_per_package:'',dimension_per_package:''})




}

	return (

         
        <Form onSubmit={handleSubmit}>

          <Form.Row>
              <Form.Group as={Col} md="2" controlId="validationCustom03">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="" onChange={handleChange} autoComplete="off"   required value={packages.package_name} name="package_name" />
       
        </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>No. of packages</Form.Label>
          <Form.Control type="number" placeholder="" onChange={handleChange} autoComplete="off"   required value={packages.no_of_packages} name="no_of_packages" />
       
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Weight of package</Form.Label>
          <Form.Control type="number" placeholder="lb." onChange={handleChange} autoComplete="off"   required value={packages.weight_per_package} name="weight_per_package" />
       
        </Form.Group>
        {/*}
        <Form.Group as={Col} md="2" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control as='select' placeholder="State" onChange={handleChange} required  value={packages.state} name="state" >

       <option>Choose...</option>
               {states.map((s,i)=>(
                  <option value={`${s}`} key={i}>{s}</option>))}></Form.Control>
        
        </Form.Group>
    */}
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Dimension of package(in)</Form.Label>
       <Form.Control type="text" placeholder="    l * b * h             " onChange={handleChange} autoComplete="off"   required value={packages.dimension_per_package} name="dimension_per_package" />
        </Form.Group>
      </Form.Row>

       <Button variant="" size="sm" type="submit" style={{
    background: '#facb52',
    boxShadow: '0px 5px 50px rgba(250,203,82,0.5)',
    color: '#000',
    width:'',
    fontWeight:500,
    marginBottom:'20px',
    float:'left'
  }}>
    Add new Package
  </Button>
        </Form>
		)
}



export default Form_;