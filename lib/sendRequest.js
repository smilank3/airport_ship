import 'isomorphic-unfetch';

const port=process.env.PORT|| 8001;
const dev=process.env.NODE_ENV!=='production'

const ROOT_URL=dev?`http://localhost:${port}`:""


export default async function SendRequest(path,options={}){




	const headers=Object.assign({},options.headers ||{},{

		'Content-type':'application/json; charset=UTF-8'
	});


// this is the fetch to path
	const response=await fetch(
		`${ROOT_URL}${path}`, Object.assign({method:'POST',credentials:'include'},options,{headers}));

	const data=response.json();


	if(data.error){
	
		throw new Error(data.error);
	}

	return data;
}