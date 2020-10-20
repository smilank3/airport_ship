// www/pages/login.js

import {Component} from 'react';

import {Form,Button} from 'react-bootstrap'
export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
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
      <div style={{border:'',maxWidth:'',padding:'10px',display:'flex',justifyContent:'center',width:'100%'}}>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" size="sm"/>
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" size="sm" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" size="sm" type="submit">
    Submit
  </Button>
</Form>
</div>
      </>
    );
  }
}
