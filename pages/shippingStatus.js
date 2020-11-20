

const ShippingStatus=(props)=>{

	


	return (
          
<div className="container px-1 px-md-4 py-5 mx-auto">
    <div className="card">
        <div className="row d-flex justify-content-between px-3 top">
            <div className="d-flex">
                <h5>ORDER <span className="text-primary font-weight-bold">#Y34XDHR</span></h5>
            </div>
            <div className="d-flex flex-column text-sm-right">
                <p className="mb-0">Expected Arrival <span>01/12/19</span></p>
                <p>USPS <span className="font-weight-bold">234094567242423422898</span></p>
            </div>
        </div> 
        <div className="row d-flex justify-content-center">
            <div className="col-12">
                <ul id="progressbar" className="text-center">
                    <li className="active step0 ">order Processed</li>
                    <li className="active step0">order shipped</li>
                    <li className="active step0">order en route</li>
                    <li className="step0">delivered</li>
                </ul>
            </div>
        </div>
   
    </div>
</div>
		)
}

export default ShippingStatus;