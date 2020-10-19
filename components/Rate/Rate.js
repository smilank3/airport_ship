

import {InputGroup,FormControl,Row,Col,Button} from 'react-bootstrap'


const Rate=()=>{

	return (


  <div style={{marginTop:'40px'}}>
  
   <form action="">
   <Row center="xs">
  
   <Col lg={5} md={5} sm={5} xs={12} style={{marginBottom:'10px'}}>
 <InputGroup size="" className="mb-3">
    
    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="From" />
  </InputGroup>

   </Col>
   
   
   <Col lg={5} md={5} sm={5} xs={12}>
   <InputGroup size="" className="mb-3">
    
    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="To" />
  </InputGroup>
  </Col>

   <Col lg={1} md={1} sm={1} xs={12} >
     <Button variant="primary" size="">
        submit
      </Button>
   </Col>
   	 
   </Row>

  
   </form>
  
  </div>
		)
}


export default Rate;