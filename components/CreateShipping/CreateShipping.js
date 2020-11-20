import dynamic from 'next/dynamic';

import states from '../SignUp/states'

//const Stepper=dynamic(()=>import('bs-stepper'),{ssr:false})

import { Row, Col, Form,Button} from 'react-bootstrap'

import Package from '../Package/Package'
import Table from '../Package/Table'
import Form2 from '../Package/Form'

import PaymentButton from '../PayButton/PayButton'

const Stepper = typeof document !== 'undefined' ? require('bs-stepper') : () => null;

import StripeCheckout from 'react-stripe-checkout';
import stripe from 'stripe'

import sendRequest from '../../lib/sendRequest'


let StripePublishableKey='pk_test_DZwTE4Co1W29hY8tH5v7oKQT009In6JaEI';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
   
            packages:[],
            senderFirstName:'',
            senderLastName:'',
            senderPhone:'',
            senderEmail:'',
            // sincer creter is kiosk personnel we use his/her location as senderlocation
            airportLocation:this.props.userProfile.airportLocation,
            processedBy:this.props.userProfile.email,
            receiverFirstName:'',
            receiverLastName:'',
            receiverEmail:'',
            receiverPhone:'',
            receiverAddress:'',
            receiverCity:'',
            receiverApt:'',
            receiverZip:'',
            receiverCountry:'',

            courierCompany:'FedEx Air',
            totalCost:20,  // default is $20 and every new package will cost $3

            validate:false,
            finalValidate:false,
            showPaymentModal:null,

        };
    }

    // handle change



    handleChange=(event)=>{

    const target = event.target;
    const name = target.name;
    const value = target.value;



    this.setState({
      [name]: value,
    });

    }



    removePackage = async ({index,no_of_packages,weight_per_package,dimension_per_package}) => {
      

          this.state.packages.splice(index,1);


      

          this.setState({
            ...this.state,
            packages:this.state.packages,
            totalCost:this.state.totalCost-3,
          })


    }

    handleSubmitPackage = Package => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */


        this.setState((prev,current)=>(
               {packages:prev.packages.concat(Package),

                totalCost:prev.totalCost+3}
            ))
    }




    componentDidMount() {

        this.stepper = new Stepper(document.querySelector('#stepper1'), {
            linear: false,
            animation: true,

            selectors: {
                steps: '.step',
                trigger: '.step-trigger',
                stepper: '.bs-stepper'
            }
        })
    }

    onSubmit=(event)=>{

    const form =event.currentTarget;



// fix  two form conflicting.
if(event.target.id!=="main-form"){


  return;
}
  
 if(form.checkValidity()===false){
  this.setState({showPaymentModal:false})
      event.preventDefault();
      event.stopPropagation();
  alert('please fill up the missing field.')

    
  alert(this.state.validate)
      this.setState({validate:true})
     
      return;
   
    }

    
    //this.setState({validate:true});
   
    if(form.checkValidity()===true){
      event.preventDefault();
      event.stopPropagation();
      alert('succeed');
      

      if(!this.state.packages.length){
         alert('you forget to add package');
         return ;
      }



// final validate


      this.setState({finalValidate:true})





    }



    }

onToken= async(token)=>{

 alert(' processing ');

 // SEVER....


 // close stripe modal
 this.setState({showPaymentModal:false})


  // and process..........

 let orderId=new Date().getTime()+Math.random().toString(36).substr(2, 9);
    var package_=this.state;
      package_.orderId=orderId;
      package_.stripeToken=token;
      package_.payBy='card'


  let res=await sendRequest('/api/admin/createShipping',{body:JSON.stringify(package_)});
  if(res.error){
    alert(res.error);
  }else{
    alert('succeed');

    alert(`Tracking Id : ${res.trackingId}. 
       We will send this Id to customer cell phone.
       They can track their package using this id.
      `)

  
        this.setState(
      {
   
            packages:[],
            senderFirstName:'',
            senderLastName:'',
            senderPhone:'',
            senderEmail:'',
            // sincer creter is kiosk personnel we use his/her location as senderlocation
            airportLocation:this.props.userProfile.airportLocation,
            processedBy:this.props.userProfile.email,
            receiverFirstName:'',
            receiverLastName:'',
            receiverEmail:'',
            receiverPhone:'',
            receiverAddress:'',
            receiverCity:'',
            receiverApt:'',
            receiverZip:'',
            receiverCountry:'',

            courierCompany:'FedEx Air',
            totalCost:20,  // default is $20 and every new package will cost $3

            validate:false,
            finalValidate:false,
            showPaymentModal:null,

        });


  }


 




}



// pay cahs


onPayCash=async(e)=>{
  // cash payment.
e.preventDefault();


 let orderId=new Date().getTime()+Math.random().toString(36).substr(2, 9);
    var package_=this.state;
      package_.orderId=orderId;
      package_.payBy="cash";


  let res=await sendRequest('/api/admin/createShipping',{body:JSON.stringify(package_)});
  if(res.error){
    alert(res.error)
  }else{
    alert('succeed');


     alert(`Tracking Id : ${res.trackingId}. 
       We will send this Id to customer cell phone.
      `)

    //reset

    this.setState(
      {
   
            packages:[],
            senderFirstName:'',
            senderLastName:'',
            senderPhone:'',
            senderEmail:'',
            // sincer creter is kiosk personnel we use his/her location as senderlocation
            airportLocation:this.props.userProfile.airportLocation,
            processedBy:this.props.userProfile.email,
            receiverFirstName:'',
            receiverLastName:'',
            receiverEmail:'',
            receiverPhone:'',
            receiverAddress:'',
            receiverCity:'',
            receiverApt:'',
            receiverZip:'',
            receiverCountry:'',

            courierCompany:'FedEx Air',
            totalCost:20,  // default is $20 and every new package will cost $3

            validate:false,
            finalValidate:false,
            showPaymentModal:null,

        });

   


  }

  // 
}



//

_filter=(r,lists)=>{

// ? to avoid dulplicate role in <option></opition>


    return lists.filter((role,i)=>{

      return role!==r;
    })
}



    render() {

        return (
            <div>

      
 
        <div id="stepper1" className="bs-stepper ">
<Row style={{justifyContent:'center'}}>

  <Col lg={12} md={12} sm={12} xs={12}>
          <div className="bs-stepper-header ">
            <div className="step" data-target="#test-l-1">
              <button className="step-trigger" >
                <span className="bs-stepper-circle" >1</span>
                <span className="bs-stepper-label">Sender</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Receiver</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">What</span>
              </button>
            </div>

             <div className="line"></div>
            <div className="step" data-target="#test-l-4">
              <button className="step-trigger">
                <span className="bs-stepper-circle">4</span>
                <span className="bs-stepper-label">Payment</span>
              </button>
            </div>
          </div>

</Col>
</Row>


          <div className="bs-stepper-content" style={{width:'100%'}}>
            <Form  id="main-form" className="main-form" responsive noValidate validated={this.state.validate}  onSubmit={this.onSubmit}  style={{border:'2px solid #d4cecee3',padding:'15px',borderRadius:'9px'}}>



          {/* 1st form */}
              <div id="test-l-1" className="content" style={{width:'100%'}}>
 
                           <Form.Row>
                                  <Form.Group as={Col} controlId="name">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control required size="sm" name="senderFirstName" value={this.state.senderFirstName} onChange={this.handleChange} />
                                  </Form.Group>
                                  <Form.Group as={Col} controlId="name">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control required size="sm" name="senderLastName" value={this.state.senderLastName} onChange={this.handleChange}/>
                                  </Form.Group>
                                
                                  <Form.Group as={Col} controlId="formGridZip" size="sm">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control required size="sm" name="senderPhone" value={this.state.senderPhone} onChange={this.handleChange}/>
                                  </Form.Group>
                          </Form.Row>

                         

                        <div className="form-group">
                              <label htmlFor="exampleInputEmail1">Email address</label>
                              <input required type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="senderEmail" value={this.state.senderEmail} onChange={this.handleChange}/>
                            </div>


                      

             

                           <Button  type="button" variant="primary" size="sm" style={{minWidth:'100px',background:'black'}} onClick={() => this.stepper.next()}>Next</Button>
              </div>


         {/* 2nd form */}
              <div id="test-l-2" className="content">
                    
                      <Form.Row>
                                <Form.Group as={Col} controlId="formBasicPassword">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control required type="text" size="sm" placeholder="" name="receiverFirstName" value={this.state.receiverFirstName} onChange={this.handleChange}/>
                        </Form.Group>

                         <Form.Group as={Col} controlId="formBasicPassword">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control required type="text" size="sm" placeholder="" name="receiverLastName" value={this.state.receiverLastName} onChange={this.handleChange}/>
                        </Form.Group>

                        </Form.Row>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control required type="email" placeholder="" size="sm" name="receiverEmail" value={this.state.receiverEmail} onChange={this.handleChange}/>
                        
                        </Form.Group>

                    
                       
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control required type="text" size="sm" placeholder="" name="receiverPhone" value={this.state.receiverPhone} onChange={this.handleChange} />
                        </Form.Group>


                          <Form.Group controlId="formBasicPassword">
                          <Form.Label>Address</Form.Label>
                          <Form.Control required type="text" size="sm" placeholder="street Address" style={{marginBottom:'10px'}}
                            name="receiverAddress" value={this.state.receiverAddress} onChange={this.handleChange}
                           />
                          <Form.Control type="text" size="sm" placeholder="Apartment, suite, unit, building, floor, etc"  style={{marginBottom:'10px'}}
                            name="receiverApt" value={this.state.receiverApt} onChange={this.handleChange}
                           />
                         
                        </Form.Group>


                        <Form.Row>
                          <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control required size="sm"  name="receiverCity" value={this.state.receiverCity} onChange={this.handleChange}/>
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Country</Form.Label>
                            <Form.Control required as="select" defaultValue="Choose..." size="sm" name="receiverCountry" value={this.state.receiverCountry} onChange={this.handleChange}>
                              <option>Choose...</option>
                              {['Canada','United States'].map((s,i)=>(
                                <option value={`${s}`} key={i}>{s}</option>))}
                          
                            </Form.Control>
                          </Form.Group>

                        
                        </Form.Row>

 <Button  type="button" variant="primary" size="sm" style={{minWidth:'100px',background:'black'}} onClick={() => this.stepper.next()}>Next</Button>
              </div>




        {/* 3rd form  packages*/}
              <div id="test-l-3" className="content text-center">
             <div>
                <Table packages={this.state.packages} removePackage={this.removePackage.bind(this)}/>

                <div style={{marginTop:'60px',border:'2px solid #facb52',padding:'10px',borderRadius:'3px'}}>
                   <Form2 addNew={this.handleSubmitPackage.bind(this)}/>
                </div>
               

              </div>

              <div style={{marginTop:'40px',display:'blok',float:''}}>
              <Button  type="button" variant="primary" size="sm" style={{minWidth:'100px',background:'black'}} onClick={() => this.stepper.next()}>Next</Button>

              </div>
              </div>

        {/* 4th form */}
             
      <div id="test-l-4" className="content text-center">

<Form.Row style={{justifyContent:'center'}}>
   <Form.Group as={Col} md={4} lg={4} controlId="name">
                                    <Form.Label style={{fontWeight:900,fontSize:'24px',color:'purple'}}>Choose courier service</Form.Label>
                                    <Form.Control required as="select" size="sm" name="courierCompany" value={this.state.courierCompany} onChange={this.handleChange} style={{color:'purple',fontWeight:700}}>

                                    <option>{this.state.courierCompany}</option>
                              {this._filter(this.state.courierCompany,['FedEx ground','FedEx Air','UPS Ground','UPS Air',"USPS "]).map((s,i)=>(
                                <option style={{color:'purple',fontWeight:700}} value={`${s}`} key={i}>{s}</option>))}
                          </Form.Control>
                                  </Form.Group>
</Form.Row>

              

              <div style={{marginTop:'50px'}}>
  <div style={{margin:'40px'}}>
                 <Button type="submit" style={{display:this.state.finalValidate && this.state.packages.length?'none':''}} >Click to Validate input</Button>
                 

</div>


<div style={{display:this.state.finalValidate && this.state.packages.length?'':'none'}}>

               <Row style={{justifyContent:'center'}}><Button  onClick={this.onPayCash}>Pay with Cash    ${this.state.totalCost}</Button></Row>
                    <Row style={{justifyContent:'center',margin:'20px',fontSize:'20px',fontWeight:700}} >or</Row>
                 <Row style={{justifyContent:'center'}}>
                   <StripeCheckout
                    
 stripeKey={StripePublishableKey}
  token={this.onToken}
  name="AirExp llc"
   

  email={this.state.senderEmail}
  desktopShowModal={this.state.showPaymentModal||null}

  >
    
    <Button onClick={()=>this.setState({showPaymentModal:true})}   style={{backgroundColor:'purple',border:'none'}}
    >
      Pay with Card        ${this.state.totalCost}
    </Button>
  </StripeCheckout></Row>


</div>
                
              </div>     

              
              </div>




        



            </Form>
          </div>



        </div>

      
      </div>
        );
    }
}


export default App;