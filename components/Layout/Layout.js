


import {Container} from 'react-bootstrap'
import Navigation from '../navigation'
import Footer from '../footer'

const Layout=(props)=>{

	return (
		<div style={{backgroundColor:''}}>
		
		<nav style={{backgroundColor:'red',borderBottom:'1px solid #e9e9e9f2',}}>	

			<Navigation/>
		</nav>
		

			<Container style={{marginTop:"80px"}}>
				{props.children}
			</Container>


			<Footer/>
		</div>)
}


export default Layout;