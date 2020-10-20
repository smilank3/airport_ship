import {Component} from 'react';

import {Form,Button,Col,Row} from 'react-bootstrap'

import states from './states'


export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      name:'',
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
   
  }

  render() {
    return (
      <>
      <div style={{border:'',maxWidth:'',padding:'10px',display:'flex',justifyContent:'center',minWidth:''}}>
        <Form>

          <Form.Group controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" size="sm" placeholder="" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="" size="sm"/>
  
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" size="sm" placeholder="" />
  </Form.Group>
 
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="password" size="sm" placeholder="" />
  </Form.Group>


    <Form.Group controlId="formBasicPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control type="password" size="sm" placeholder="street Address" style={{marginBottom:'10px'}} />
    <Form.Control type="password" size="sm" placeholder="Apartment, suite, unit, building, floor, etc"  style={{marginBottom:'10px'}} />
    <Form.Control type="password" size="sm" placeholder="Department, c/o, etc." />
  </Form.Group>


  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control size="sm"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose..." size="sm">
        <option>Choose...</option>
        {states.map((s,i)=>(
          <option value={`${s}`} key={i}>{s}</option>))}
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip" size="sm">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>


  
  <Button variant="primary" size="sm" type="submit">
    Submit
  </Button>
</Form>
</div>
      </>
    );
  }
}
