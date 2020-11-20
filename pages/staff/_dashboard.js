

const Dashboard=(props)=>{

	return (
 <div>
 	 <h2> Hello <span  style={{color:'purple',fontWeight:700}}>{props.userProfile.firstName} {props.userProfile.lastName}</span> </h2>

{props.userProfile.airportLocation.airportName?( <div>
	 
	 <p> you are working staff at   <span className="text-secondary" style={{color:'black',fontWeight:500,marginLeft:'9px'}}>{props.userProfile.airportLocation.airportName}, {props.userProfile.airportLocation.airportCity},{props.userProfile.airportLocation.airportCountry}</span>
                </p>

</div>):(
 <p> You are not assigned any thing yet</p>
)}
 	

 </div>
		)
}



export default Dashboard;