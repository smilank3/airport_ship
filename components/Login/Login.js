// www/pages/login.js

import {Component} from 'react';
import sendRequest from '../../lib/sendRequest'
import frontpageBG from '../../assests/image/262899.jpg'

import {Form,Button,Alert} from 'react-bootstrap'
export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email_or_username: '',
      password: '',
      error: '',
      isAdmin:this.props.isAdmin,
    };



  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;


  console.log(target)
  console.log(name);
  console.log(value)
    this.setState({
      [name]: value,
    });
  }



  async handleSubmit(event) {
    event.preventDefault();
console.log(this.state)


 let res = await sendRequest('/api/User/login',{body:JSON.stringify(this.state)});

 console.log(res);
 const {token,userAccount}=res;

 if(!token){
  alert(res.error);
  this.setState({error:res.error})
  return;
 }

 handleLogin(token,userAccount.role)


   
  }

  render() {
    return (
      <>
       
        
         
          <div style={{ border: '', maxWidth: '', padding: '10px', display: 'flex', justifyContent: 'center', width: '100%'}}>
          <Form onSubmit={this.handleSubmit.bind(this)} style={{
            padding: '10px', border: '1px solid #e1dcdc', minWidth: '300px', borderRadius: '12px', background: '', color: ' rgb(253, 253, 253)', backgroundColor: 'rgb(54, 54, 115)'}}>

        <h4 style={{textAlign:'center',marginBottom:'20px'}}>Sign In</h4>

        {this.state.error===''?'':(<Alert size="sm" variant="danger">
   {this.state.error}
</Alert>)}

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email or username</Form.Label>
    <Form.Control type="text" name="email_or_username" placeholder="Enter email or username" size="sm" onChange={this.handleChange.bind(this)}/>
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" size="sm" placeholder="Password" onChange={this.handleChange.bind(this)} />
  </Form.Group>
 
  <Button variant="" size="sm" type="submit" style={{
    background: '#facb52',
    boxShadow: '0px 5px 50px rgba(250,203,82,0.5)',
    color: '#000',
    width:'100%',
    fontWeight:500,
    marginBottom:'30px'
  }}>
    sign In
  </Button>
</Form>
          </div>
        
      </>
    );
  }
}
