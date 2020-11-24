
import {Navbar,Container} from 'react-bootstrap'

const Footer=()=>{

	return (

	<div style={{display:'flex',justifyContent:'center',padding:'40px',height:'120px',marginBottom:'10px',borderTop:'1px solid #8080803d',color: ' rgb(253, 253, 253)'}}>
		
         <p> ©{new Date().getFullYear()} AirExp</p>

	</div>


	)
}

export default Footer;