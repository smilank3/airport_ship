

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import FormControl from  'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import {Container} from 'react-bootstrap'


import {CgMenuRound,CgMenuGridR} from 'react-icons/cg'
import {FaUserAlt,FaPaperPlane} from 'react-icons/fa'
import NavProfile from './navprofile'


const Navigation =(props)=>{
console.log('Navigation')

	return (
		<>

      <Navbar expand="lg" fixed="top" sticky="" style={{ fontFamily: 'Georgia', letterSpacing: '0.02em', border: '', padding: '3px 3px', borderBottom: "1px solid #E463B6", backgroundColor: '#363673' }}>

<Container style={{widht:'100%',maxWidth:'1070px'}}>



          <Navbar.Brand href="/" style={{ paddingLeft: '', display: '' }}><FaPaperPlane size="24px" fill="purple" style={{ padding: '', display: '', marginLeft: '3px', marginRight: '4px' }} /> <span style={{ fontWeight: 700, color: " rgb(253, 253, 253)"}}>AirEx</span></Navbar.Brand>
  {/* if user show user log else tobble*/}

{props.isAuthenticated?(<Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'none',outline:'none'}}> 
   <FaUserAlt size="28px" fill="black"/></Navbar.Toggle>)
:(
  <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'none',outline:'none'}}> 
   <CgMenuRound size="32px" fill="red"/></Navbar.Toggle>
  )
    }







  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
              <Nav.Link style={{ marginLeft: '20px', color: " rgb(253, 253, 253)"}} href="/aboutus">About us</Nav.Link>
   
  
    </Nav>



{/*dynamic Nav ....   if user is logged in show user logo and hide this Nav*/}
      {/*
      <Nav.Link href="#deets" > <span style={{border:'1px solid black',padding:'4px 8px'}}>support</span></Nav.Link>
      <Nav.Link eventKey={2} href="#memes" >
        <span style={{border:'1px solid black',padding:'4px 8px'}}>login or sign up</span>
      </Nav.Link>
*/}


{/* this nav would chang if use is authenticated.*/}

  <NavProfile isAuthenticated={props.isAuthenticated} userProfile={props.userProfile} />
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
		)
}



export default Navigation;