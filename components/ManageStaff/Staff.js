

import React,{useState,useRef,useEffect} from 'react';
import {Form,Button,Badge,} from 'react-bootstrap'
import {FaUserEdit} from 'react-icons/fa'
import {MdCancel} from 'react-icons/md'

import sendRequest from '../../lib/sendRequest'

const usePreviousStaff=(staff)=>{
  const ref=useRef();
  useEffect(()=>{
    ref.current=staff;
  });

  return ref.current;
}


const Staff=({staff,index,locations,handleShow})=>{
	const [Staff,setStaff]=useState(staff)

 // staff before you update

 const StaffBeforeChange=usePreviousStaff(Staff);



	const [editMode,setEditMode]=useState(false)


  var handleChange=(e)=>{
    const target=event.target;
    const name=target.name;
    const value=target.value;

    setStaff({
    	...Staff,
    	[name]:value,
    })

  }

  // for locaton

  var handleChangeLocation=(e)=>{

    const target=event.target;
    const name=target.name;
    const value=target.value;



   

    var arrayOfLocation=value.split(', ');


setStaff({
  ...Staff,
  [name]:{airportName:arrayOfLocation[0],airportCity:arrayOfLocation[1],airportCountry:arrayOfLocation[2]}
})



  }


  // submit update

  var updateSubmit=async (e)=>{

  	  

      //

        
         let res=await sendRequest('/api/admin/updateStaff',{body:JSON.stringify(Staff)})
          
         // if res is ok
          if(res.error){
            handleShow(res.error)
            setStaff(StaffBeforeChange);

            return;
          }
          
     


      // findOneAndUPdate.
  	  setEditMode(false)
  }

var _filter=(r,lists)=>{

// ? to avoid dulplicate role in <option></opition>


    return lists.filter((role,i)=>{

      return role!==r;
    })
}


// _filter locations

var _filterLocation=(location,locations)=>{

      return locations.filter(l=>{
        return l.name!==location;
      })
}





	return (

   <tr><td>{Staff.userId}</td>
         	<td>{Staff.username}</td>
         	<td>{Staff.email}</td>
         	<td>
         		{editMode?(
         			<Form.Control as='select' placeholder="State" onChange={handleChangeLocation} defaultValue={"fsf"} style={{maxWidth:'200px'}} 
              value={`${Staff.airportLocation.airportName}, ${Staff.airportLocation.airportCity}, ${Staff.airportCountry}`} 

              name="airportLocation" size="sm">


{(Staff.airportLocation.airportName)?(
    
  <option>{Staff.airportLocation.airportName}, {Staff.airportLocation.airportCity}, {Staff.airportCountry}</option>):<option>not assigned</option>}


{_filterLocation(Staff.airportLocation.airportName,locations).map(l=>{
     return <option>{l.name}, {l.city}, {l.country}</option>
})}


              </Form.Control>
         			):(<span>{Staff.airportLocation.airportName?`${Staff.airportLocation.airportName}`:(<Badge variant="info">not assigned</Badge>)}</span>)}


         	</td> {/* also locationname and */}
         	<td>
          {editMode?(


           <Form.Control as='select' placeholder="State" onChange={handleChange} defaultValue={"fsf"} required  value={Staff.role} name="role" size="sm">

       <option>{Staff.role}</option>

       {_filter(Staff.role,["staff","manager","kiosk clerk"]).map((role,i)=>{
        return <option> {role} </option>
       })}
  


              </Form.Control>
          	):(<span>{Staff.role}</span>)}
         </td>

    {/*     <td>
           
 remove permission coloumn}
         {editMode?(


           <Form.Control as='select' placeholder="" onChange={handleChange} defaultValue={"fsf"} required  value={Staff.role} name="permission" size="sm">

       <option>{Staff.permission}</option>

       {_filter(Staff.permission,[1,2,3]).map((p,i)=>{
        return <option> {p} </option>
       })}
  


              </Form.Control>
            ):(<span>{Staff.permission}</span>)}</td>
*/}

          <td>{editMode?(
          	<span>
          	<span>
           <Button size="sm" variant="warning" onClick={updateSubmit} style={{marginLeft:'4px',padding:'0px 2px',color:''}}>update</Button>

           <MdCancel size="24px" fill="#cf1406" onClick={()=>{ return setEditMode(false)}} style={{float:'right',marginLeft:'0px',padding:'0px 2px',cursor:'pointer'}} />

           </span>
          
           </span>
           	):(

   <FaUserEdit size="24px" style={{color:'purple',cursor:'pointer',marginLeft:'10px'}} onClick={()=>setEditMode(true)}/>
           	)}</td>




           
         </tr>
		)
}

export default Staff;