import {Component} from 'react';

import {Form,Button,Col,Row,InputGroup} from 'react-bootstrap'



import states from './states'
import {handleLogin} from '../../lib/auth'

import sendRequest from '../../lib/sendRequest'



export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:'',
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
      validate:false,
      isAdmin:this.props.isAdmin, 
      
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

    const form =event.currentTarget;

 if(form.checkValidity()===false){
      event.preventDefault();
      event.stopPropagation();
      this.setState({validate:true})
      return;
   
    }

    
    //this.setState({validate:true});

    if(form.checkValidity()===true){
      event.preventDefault();
      event.stopPropagation();
      alert('form is filled')

      try {
 let res = await sendRequest('/api/User/signup',{body:JSON.stringify(this.state)});
//shandleLogin(req.token);

const {token,userAccount}=res;
if(!token){
  alert(req.error);
  return;
}

handleLogin(token,userAccount.role);

 return;
      
    } catch (err) {
      console.log('Signup failed.', err);
    }

  

    }
    

  return;
  }

  render() {
    return (
      <>
      <div style={{border:'',maxWidth:'',padding:'10px',display:'flex',justifyContent:'center',minWidth:''}}>
          <Form noValidate validated={this.state.validate} onSubmit={this.handleSubmit.bind(this)} style={{ border: '1px solid #e1dcdc', padding: '20px', borderRadius: '9px', backgroundColor: 'rgb(54, 54, 115)', color: ' rgb(253, 253, 253)'}}>
      
 <h4 style={{textAlign:'center',marginBottom:'30px' }}>Create Account</h4>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
          onChange={this.handleChange}
            required
            type="text"
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
            name='username'
              type="text"
               onChange={this.handleChange}
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
              value={this.state.username}
             
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>


<Form.Row>
  <Form.Group as={Col} md="4" controlId="email">
    <Form.Label>Email address</Form.Label>
    <InputGroup>
    <Form.Control name="email" onChange={this.handleChange} value={this.state.email} type="email" placeholder="" size="sm" required/>
     <Form.Control.Feedback type="invalid">
              Please provide email address
            </Form.Control.Feedback>
   </InputGroup>
  </Form.Group>




  <Form.Group as={Col} md="4" controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" onChange={this.handleChange} value={this.state.password} type="password" size="sm" placeholder="" required />
    <Form.Control.Feedback type="invalid">
              Please provide email address
            </Form.Control.Feedback>
  </Form.Group>

  <Form.Group as={Col} md="4" controlId="phone">
    <Form.Label>Phone</Form.Label>
    <InputGroup>
    <Form.Control name="phone" onChange={this.handleChange} value={this.state.phone} type="text" size="sm" placeholder="" required/>
    <Form.Control.Feedback type="invalid">
              Please provide email address
            </Form.Control.Feedback>
  </InputGroup></Form.Group>


</Form.Row>





<Form.Row>
    <Form.Group as={Col} md="6" controlId="address">
    <Form.Label>Address</Form.Label>
<InputGroup>
    <Form.Control  type="text" size="sm" placeholder="street Address"  name="address" onChange={this.handleChange} value={this.state.address} required />
  <Form.Control.Feedback type="invalid">
              Please provide address
            </Form.Control.Feedback>
</InputGroup>
  </Form.Group>

<Form.Group as={Col} md="6" controlId="apt">
   <Form.Label>Apt</Form.Label>
   <InputGroup>
    <Form.Control type="text" size="sm" placeholder="Apartment, suite, unit, building, floor, etc" name="apt" onChange={this.handleChange} value={this.state.apt} required />
<Form.Control.Feedback type="invalid">
              Please provide apt,suit.
            </Form.Control.Feedback>
</InputGroup>
</Form.Group>

</Form.Row>




      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" onChange={this.handleChange}   required value={this.state.city} name="city" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control as='select' placeholder="State" onChange={this.handleChange} required  value={this.state.state} name="state" >

       <option>Choose...</option>
                {states.map((s,i)=>(
                  <option value={`${s}`} key={i}>{s}</option>))}
                <option>...</option></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" onChange={this.handleChange} placeholder="Zip" required  value={this.state.zip} name="zip" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
     
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


