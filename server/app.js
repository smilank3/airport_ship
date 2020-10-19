



const express =require('express');
const next=require('next')
const dev=process.env.NODE_ENV !=='production';
const app=next({dev});
const port= process.env.PORT||8001;
console.log("testing")



const ROOT_URL=`http://localhost:${port}`

const handle=app.getRequestHandler();


app.prepare().then(async()=>{
	const server=express();


	

	server.use(express.json())

	

const URL_MAP={
	'/login':'/login',
	


}
  server.get('*', (req, res) => {

 
  	const url=URL_MAP[req.path];
  	if(url){
  		console.log(url)
  		app.render(req,res,url);
  	
  	}else {
  		handle(req,res);

  	
  	}

  });


	server.listen(port,err=>{
		if(err){
			throw err;
		}
		console.info(` Ready on http://localhost:${port}`)
	})
})


