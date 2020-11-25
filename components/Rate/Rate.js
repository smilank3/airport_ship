
import React,{useState,useEffect} from 'react'
import {Form,InputGroup,FormControl,Row,Col,Button,Modal,Alert} from 'react-bootstrap'
import sendRequest from '../../lib/sendRequest'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const Rate=()=>{

  // modal to show rate

  const [show,setShow]=useState(false);

  const [locations,setLocations]=useState([]);

  const [From,setFrom]=useState('choose ...');
  const [To,setTo]=useState('')

    useEffect(()=>{


        const fetchData=async()=>{


    const res=await sendRequest('/api/admin/getAllLocations',{method:'GET'});

console.log(res)

 setLocations(res.locations)


   
  }


 fetchData();
  },[])

const handleChangeLocation=(e)=>{
  e.preventDefault();

  setFrom(e.target.value)

}


  const handleSelect =async(value)=>{

   
    setTo(value);

    console.log(value)

    // to display or not the 
    
  }



  const handleSubmit=(e)=>{
    e.preventDefault();

    console.log(From)
    console.log(To);

    if(From==="choose ..."){

      alert('please choose the airport location.');
      return ;
    }


    if(To===""){
      alert('Please choose Address');

      return;
    }




    setShow(true);
  }


  return (


  <div style={{marginTop:'40px'}}>
  
   <Form onSubmit={(e)=>handleSubmit(e)}>
   <Row center="xs">
  
   <Col lg={5} md={5} sm={5} xs={12} style={{marginBottom:'10px'}}>
 <InputGroup size="" className="mb-3">
    
    <FormControl as='select' placeholder="from" onChange={handleChangeLocation} defaultValue={"fsf"}  
          
value={`${From}`}
              name="airportLocation" size="sm">



<option>{From}</option>
{locations.map(l=>{
     return <option>{l.name}, {l.city}, {l.country}</option>
})}


              </FormControl>
  </InputGroup>

   </Col>
   
   
   <Col lg={5} md={5} sm={5} xs={12}>
  
    

            <PlacesAutocomplete
        value={To}
        onChange={setTo}
        onSelect={handleSelect}


      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (





          <div style={{textAlign:''}}>

          
            <input style={{height:'30px',width:'100%',padding:'12px'}}
            
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion,i) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: 'purple',color:'white', cursor: 'pointer',textAlign:'left',padding:'3px 5px'}
                  : { backgroundColor: '#ffffff', cursor: 'pointer',textAlign:'left',padding:'3px 5px',color:'purple'};
                return (
                  <div key={i}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span key={i}>{suggestion.description}</span>

  
                      


                  </div>


              

                );
              })}
            </div>
{/* on suggestion click check longitude and latitude and find the distance.. and display message */}

          </div>
        )}
      </PlacesAutocomplete>
   
 
  </Col>

   <Col lg={1} md={1} sm={1} xs={12} >
     <Button variant="primary" type="submit" size="sm">
        submit
      </Button>
   </Col>
     
   </Row>

  
   </Form>

   <Modal show={show} onHide={()=>setShow(false)}  aria-labelledby="contained-modal-title-vcenter"
      centered >
   
        <Modal.Body>
          
  <Modal.Body className="modal-dialog modal-lg" style={{backgroundColor:'lightgreen',color:''}}  >
 
 Intial charge $20.
 <br/>
 $2 exta for each packages.

 

        </Modal.Body>
        </Modal.Body>
     </Modal>
  
  </div>
    )
}


export default Rate;