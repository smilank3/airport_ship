
import {Navbar,Container} from 'react-bootstrap'

const Footer=()=>{

	return (

	<div style={{display:'flex',justifyContent:'center',padding:'20px',height:'60px',marginBottom:'10px',borderTop:'1px solid #8080803d',}}>
		
         <p> ©{new Date().getFullYear()} AirExp</p>

	</div>


	)
}

export default Footer;