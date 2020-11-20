import React, {useState,useEffect} from 'react';
import sendRequest from '../../lib/sendRequest'


import Staff from './Staff'
import {OverlayTrigger,Overlay,Table,Tooltip,Spinner,Modal,Alert} from 'react-bootstrap'
import {RiErrorWarningFill} from 'react-icons/ri'

const ManageStaff=()=>{


  const [show,setShow]=useState({show:false,content:''});

  const [staffs,setStaffs]=useState([])
  // location to assign staff

  const [locations,setLocations]=useState([]);

   const handleClose = () =>setShow({show:false});
  const handleShow = (error) =>{  return setShow({show:true,content:error})}


  useEffect(()=>{


        const fetchData=async()=>{

    const res=await sendRequest('/getAllStaff',{method:'GET'});

    const res2=await sendRequest('/api/admin/getAllLocations',{method:'GET'});

  
    setStaffs(res.staffs)

    setTimeout(()=>{
 setLocations(res2.locations)

    },100)
   
  }


 fetchData();
  },[])

if(!locations.length){
  return <div class="loading">
    <div class="loader"></div>
</div>
}

	return (

    <div>

 <Table striped  hover responsive size="" >
  <thead>
    <tr>
      <th>userId</th>
      <th>username</th>
      <th>Email</th>
      <th>Location</th>
      <th>Role</th>
      {/*<th>
     <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">
  
    <ol>
       <li>admin level permission (ManageStaff..)</li>
       <li>permission to read and write packaging database only</li>
       <li>none</li>
    </ol>

     </Tooltip>}>
     <span>
         Permission 
         </span>
     </OverlayTrigger>
    </th>*/}
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

  {staffs.map((d,i)=>{

  	return (
          <Staff handleShow={(err)=> {return handleShow(err)}} key={i} staff={d}  locations={locations}/>
  		)
  })}
   
  </tbody>
</Table>
  <Modal show={show.show} onHide={handleClose}    aria-labelledby="contained-modal-title-vcenter"
      centered>
   
        <Modal.Body>
          
  <Modal.Body className="modal-dialog modal-lg">
 <Alert variant="danger"> {show.content}</Alert>
        </Modal.Body>
        </Modal.Body>
     
      </Modal>
</div>


		)
}


export default ManageStaff;