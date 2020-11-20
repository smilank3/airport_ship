import {Component} from 'react';

import {Form,Button,Col,Row} from 'react-bootstrap'

import API from '../../lib/API'

import states from './states'
import {handleLogin} from '../../lib/auth'


import sendRequest from '../../lib/sendRequest'
import Router from 'next/router'



export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      firstName:'',
      lastName:'',
      phone:'',
      address:'',
      zip:'',
      apt:'',
      city:'',
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }



  async handleSubmit(event) {
    event.preventDefault();


console.log(this.state)
console.log(JSON.stringify(this.state))
    try {
      let req = await sendRequest('/api/User/signup',{body:JSON.stringify(this.state)})
     handleLogin(req.token);
 
     console.log(req)
   
    } catch (err) {
      console.log('Signup failed.', err);
    }
   
  }

  render() {
    return (
      <>
      <div style={{border:'',maxWidth:'',padding:'10px',display:'flex',justifyContent:'center',minWidth:''}}>
        <Form onSubmit={this.handleSubmit.bind(this)} style={{border:'1px solid #e1dcdc',padding:'20px',borderRadius:'9px'}}>
             <h4 style={{textAlign:'center',marginBottom:'30px'}}>Create Account</h4>

<Form.Row>



          <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" onChange={this.handleChange} value={this.state.firstName} type="text" size="sm" placeholder="" />
         </Form.Group>



          <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control name="lastName" onChange={this.handleChange} value={this.state.lastName} type="text" size="sm" placeholder="" />
          </Form.Group>

</Form.Row>




  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" onChange={this.handleChange} value={this.state.email} type="email" placeholder="" size="sm"/>
  
  </Form.Group>




  <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" onChange={this.handleChange} value={this.state.password} type="password" size="sm" placeholder="" />
  </Form.Group>



 
  <Form.Group controlId="phone">
    <Form.Label>Phone</Form.Label>
    <Form.Control name="phone" onChange={this.handleChange} value={this.state.phone} type="password" size="sm" placeholder="" />
  </Form.Group>




    <Form.Group controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control  type="password" size="sm" placeholder="street Address" style={{marginBottom:'10px'}} name="address" onChange={this.handleChange} value={this.state.address} />
    <Form.Control type="password" size="sm" placeholder="Apartment, suite, unit, building, floor, etc" name="apt" onChange={this.handleChange} value={this.state.apt}  style={{marginBottom:'10px'}} />

  </Form.Group>






  <Form.Row>


            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control name="city" onChange={this.handleChange} value={this.state.city} size="sm"/>
            </Form.Group>

            <Form.Group as={Col} controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control  as="select" defaultValue="Choose..." size="sm" name="state" onChange={this.handleChange} value={this.state.state}>
                <option>Choose...</option>
                {states.map((s,i)=>(
                  <option value={`${s}`} key={i}>{s}</option>))}
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="zip" size="sm">
              <Form.Label>Zip</Form.Label>
              <Form.Control name="zip" onChange={this.handleChange} value={this.state.zip}/>
            </Form.Group>


  </Form.Row>


  
  <Button variant="" size="sm" type="submit" style={{
    background: '#facb52',
    boxShadow: '0px 5px 50px rgba(250,203,82,0.5)',
    color: '#000',
    width:'100%',
    fontWeight:500,
    marginBottom:'20px'
  }}>
    create account
  </Button>
</Form>
</div>
      </>
    );
  }
}
