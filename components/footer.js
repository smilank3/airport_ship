
import {Navbar,Container} from 'react-bootstrap'

const Footer=()=>{

	return (

		/*<div style={{display:'flex',justifyContent:'center',padding:'20px',height:'',marginBottom:'10px',borderTop:'1px solid #8080803d'}}>
		
         <p> ©{new Date().getFullYear()} AirExp</p>

	</div>

	*/

	<div>
		<Navbar expand="lg" variant="light" bg="light" sticky="bottom" style={{display:'flex',justifyContent:'flex-column',alignItems:'bottom',marginBottom:''}}>
  <Container>
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
  </Container>
</Navbar>
	</div>)
}

export default Footer;