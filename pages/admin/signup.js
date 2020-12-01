import React , {useState,useEffect} from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IoLogoFacebook, IoLogoTwitter,IoLogoGoogle } from 'react-icons/io';



import {Modal,Form,InputGroup,FormControl,Button} from 'react-bootstrap'

import Container from '../../components/Container/Container';
import SignUpComp from '../../components/SignUp/SignUp'



const signUp = () => {
  const router = useRouter();

  const [show,setShow]=useState(true)
  const [accessCode,setAccessCode]=useState('')


useEffect(()=>{



},[])

const handleChange=(e)=>{




  setAccessCode(e.target.value)
  console.log(accessCode)

}

const handleSubmit=(e)=>{

  e.preventDefault();

  if(accessCode==="987654321"){
    setShow(false);
return;
  }

  alert('Acess code not matched')

  
}


  return (
    <>
      <Head>
        <title>sign up </title>
        <meta name="Login page" content="login page" />
      </Head>

  
            {show?null:(<SignUpComp isAdmin={true} />)}
     

      <Modal show={show} onHide={()=>setShow(false)} backdrop="static" keyboard={false}  aria-labelledby="contained-modal-title-vcenter"
      centered >
   
        <Modal.Body>
          
  <Modal.Body  >

  <h4 style={{marginBottom:'20px'}}>Authorized personnel only</h4>

 <Form onSubmit={(e)=>handleSubmit(e)}>
 
  <Form.Group controlId="formBasicPassword">

    <Form.Control type="password" placeholder="Enter acess code" onChange={handleChange}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


 

        </Modal.Body>
        </Modal.Body>
     </Modal>
  
    
      
 
    </>
  );
};



export default signUp;
