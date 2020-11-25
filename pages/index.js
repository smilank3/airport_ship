
import React, {useState,useEffect} from 'react'
import Navigation from '../components/navigation';
//import Container from '../components/Container/Container'
import {Container,Row,Col} from 'react-bootstrap'

import Table from '../components/Table/Table'
import Rate from '../components/Rate/Rate'
import Track from '../components/Track/Track'
import {TiLocation} from 'react-icons/ti'
import {FaShippingFast} from 'react-icons/fa'
import {AiFillDollarCircle} from 'react-icons/ai'
import Router from 'next/router'

import Layout from '../components/Layout/Layout'
import sendRequest from '../lib/sendRequest'


const Test=(props)=>{

const [button,setButton]=useState("track");


	return (<div>



 <div>





<Row style={{justifyContent:'center'}}>
      <Col  xs={12} sm={12} md={6} lg={6} xlg={6}> <div style={{marginBottom:'40px'}}>
                     <h2 style={{marginBottom:'8px', fontSize:'24px', fontWeight:700, lineHeight:1.2,textAlign:'center',fontFamily:'Georgia',color:'white'}}>
                     Ship what you can't Ship.
                      </h2>

                      <div style={{marginBottom:'20px'}}>
                    </div>
                     <p style={{lineHeight:1.75, fontSize:'20px',fontFamily:'Georgia', marginBottom:0,marginTop:0,textAlign:'center'}}>
						Ship your favourite samurai sword, christmas cracker, vintage whiskey you just bought.
						
                     </p>

          


                     </div> </Col>

      </Row>

	<Row style={{justifyContent:'center'}}>
		<Col lg={2} md={2} sm={4} xs={4}  style={{border:'',cursor:'pointer', }}>



               <div style={{border:'3px solid #412be012',height:'',width:'',borderRadius:'',padding:'10px',
		display:'flex',justifyContent:'center',alignItems:'center',fontWeight:500,

         backgroundColor:button==="rate"?"purple":'',color:button==="rate"?'#efefef':''
	}}

		onClick={()=>setButton('rate')}>
						<AiFillDollarCircle size="24px" style={{ marginRight: '6px'}}/>
               	Rate
               </div>
		</Col>

			<Col lg={2} md={2} sm={4} xs={4} style={{border:'',cursor:'pointer',}}>



               <div style={{border:'3px solid #412be012',height:'',width:'',borderRadius:'',padding:'10px',
		display:'flex',justifyContent:'center',alignItems:'center',fontWeight:500,

	 backgroundColor:button==="track"?"purple":'',color:button=="track"?'#efefef':''}}

		onClick={()=>setButton('track')}>
               <FaShippingFast size="24px" style={{marginRight:'6px'}}/>
               Track

               </div>
		</Col>
		
	<Col lg={2} md={2} sm={4} xs={4}  style={{border:'',cursor:'pointer',}}>



               <div style={{border:'3px solid #412be012',height:'',width:'',borderRadius:'',padding:'10px',
		display:'flex',justifyContent:'center',alignItems:'center',fontWeight:500,

	 backgroundColor:button==="locations"?"purple":'',color:button==="locations"?'#efefef':''}}

		onClick={()=>setButton('locations')}>

		     <TiLocation size="24px" style={{marginRight:'6px'}}/>
		     Locations
               </div>
		</Col>
		

		

		

	</Row>



	{
	button==="track"?(<Track/>): button==="rate"?(<Rate/>):<Table />}

</div>

	</div>)
}


export default Test;