


import Container from '../Container/Container'
import Navigation from '../navigation'
import Footer from '../footer'

const Layout=(props)=>{

	return (
		<div style={{backgroundColor:''}}>
		
		<nav style={{backgroundColor:'red',borderBottom:'1px solid #e9e9e9f2',}}>	

			<Navigation/>
		</nav>
		

			<Container style={{marginTop:"80px",minHeight:'calc(100vh-60px)'}}>
				{props.children}
			</Container>


			
		</div>)
}


export default Layout;