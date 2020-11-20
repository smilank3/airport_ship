
import {FaUserSecret,FaUserLock,FaUserAlt} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import sendRequest from '../../lib/sendRequest'
const Profile=(props)=>{


	return (
		<div className="container">
    <div className="main-body">

   

    
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                
                    <FaUserAlt size="100px"/>
                    <div className="mt-3">
                      <h4>{props.userProfile.firstName} {props.userProfile.lastName}</h4>
                  
                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><FaUserLock size="20px" /></h6>
                    <span className="text-secondary">@ {props.userProfile.username}</span>
                  </li>
                 
                  
                </ul>
              </div>
                   <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><MdWork size="20px" />
                    <span className="text-secondary" style={{color:'black',fontWeight:500,marginLeft:'9px'}}>{props.userProfile.airportLocation.airportName}, {props.userProfile.airportLocation.airportCity},{props.userProfile.airportLocation.airportCountry}</span>
                 </h6> </li>
                 
                  
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {props.userProfile.firstName} {props.userProfile.lastName}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {props.userProfile.email}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {props.userProfile.phone}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {props.userProfile.phone}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {props.userProfile.address}
                    </div>
                  </div>
                </div>
              </div>
            
            </div>


          </div>
        </div>
    </div>)
}
// no need as user is available from _app.js

Profile.getInitialProps=async(ctx)=>{
console.log(' profile..fsfsf--------------------------------------------------')
const {req,res}=ctx;

console.log(req.cookies.token)

let user=await sendRequest('/api/User/profile',{method:'GET',headers:{token:req.cookies.token}})
	return {user}
}





export default Profile