
import TextField from '@material-ui/core/TextField';
import {Row,Col} from 'react-bootstrap'

import Button from 'react-bootstrap/Button'
import {InputGroup,FormControl} from 'react-bootstrap'
const Track=()=>{

	return (


  <div style={{marginTop:'40px'}}>
  
   <form action="">
   <Row style={{justifyContent:'center'}}>
   <Col lg={5} md={5} sm={9} xs={9}>
 
   <InputGroup size="" className="mb-3">
    
    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Enter Tracking Id" />
  </InputGroup>


   </Col>
   <Col lg={1} md={1} sm={3} xs={2} style={{border:'',display:'',padding:'0px',}}>
     <Button variant="primary" size="" style={{padding:''}}>
        Track
      </Button>
   </Col>
   	 
   </Row>

  
   </form>
  
  </div>
		)
}


export default Track;