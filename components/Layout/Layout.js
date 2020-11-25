


import Container from '../Container/Container'
import Navigation from '../navigation'
import Footer from '../footer'
import Background from '../../assests/image/262899.jpg'

import { useRouter } from 'next/router'

const Layout=(props)=>{
	const router = useRouter()
	console.log(router)
	console.log(' Layout')

	return (

		<div style={{backgroundImage:(router.pathname==="/"|| 
			router.pathname==="/aboutus" ||
			 router.pathname==="/signup"||
			  router.pathname==='/login' ||
			  router.pathname==='/admin/signup'||
			  router.pathname==='/admin/login' )? `url(${Background})`:''}}>

		
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