


import Container from '../Container/Container'
import Navigation from '../navigation'
import Footer from '../footer'

const Layout=(props)=>{
	
	console.log(' Layout')

	return (
		<div style={{backgroundColor:''}}>
		
	<nav style={{backgroundColor:'red',borderBottom:'1px solid #e9e9e9f2',}}>	

			<Navigation  isAuthenticated={props.isAuthenticated} userProfile={props.userProfile}/>
		</nav>
	

			<Container style={{marginTop:"80px",minHeight:'80vh'}}>
				{props.children}
			</Container>



<Footer >
	
	     <div style={{height:'100px',backgroundColor:''}}>
            <div>©{new Date().getFullYear()} scheduleDroid</div>
           </div>
</Footer>

			
		</div>)
}


export default Layout;