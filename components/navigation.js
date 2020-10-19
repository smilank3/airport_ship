

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from  'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import {Container} from 'react-bootstrap'


import {CgMenuRound,CgMenuGridR} from 'react-icons/cg'



const Navigation =()=>{

	return (
		<>

<Navbar bg="light" expand="lg"    fixed="top" sticky="" style={{fontFamily:'Georgia',letterSpacing:'0.02em',border:'',padding:'0px 3px',borderBottom:"1px solid #e9e9e9f2",backgroundColor:'#f8f8f8f2'}}>
<Container>
  <Navbar.Brand href="#home">AirExp</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'none',outline:'none'}}>  <CgMenuGridR size="27px" fill="red"/></Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
   
  
    </Nav>



{/*dynamic Nav ....   if user is logged in show user logo and hide this Nav*/}
      {/*
      <Nav.Link href="#deets" > <span style={{border:'1px solid black',padding:'4px 8px'}}>support</span></Nav.Link>
      <Nav.Link eventKey={2} href="#memes" >
        <span style={{border:'1px solid black',padding:'4px 8px'}}>login or sign up</span>
      </Nav.Link>
*/}
<Form inline>
     
      <Button variant="outline-success" style={{border:'none'}}><span style={{border:'1px solid black',padding:'2px 9px'}}>login</span></Button>
    </Form>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
		)
}



export default Navigation;