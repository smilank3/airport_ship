import img from "../assests/image/Packages.jpg"
import img2 from "../assests/image/Airport.png"
import img3 from "../assests/image/baggages-small.gif"

const 
About=()=>{



	return (

			
			<div className = "container bg-dark text-light" >

				<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={img} className="d-block w-100" alt="..."></img>
							<div className="carousel-caption d-none d-md-block">
							</div>
						</div>
						<div className="carousel-item">
							<img src={img2} className="d-block w-100" alt="..."></img>
							<div className="carousel-caption d-none d-md-block">
							</div>
						</div>
						<div className="carousel-item">
							<img src={img3} className="d-block w-100" alt="..."></img>
							<div className="carousel-caption d-none d-md-block">
							</div>
						</div>
					</div>
					<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
				
					
						<h1 >
						About Us!
						</h1>
					


				
            <div className="container" >
              <div className="row">
                <div className="col-md-12">
                  <p aign="justify">
				  Imagine you are traveling across the U.S and wanted to take along your favorite antique sword with you on your trip. 3 years ago this would not be possible without the 
			headaches shipping beforehand and hoping your item arrives timely. Air Express was created with the vision that every person will be able to travel with ease wether it be going to the airport
			and shipping directly to your destination without the hassel of TSA or even storing your items with us until you arrive back from your trip. Air Express has been sevicing customers in 
			8 major airports and continually growing.</p>
                  </div>
                </div>
              </div>
		  </div>
	
	)}


export default About;