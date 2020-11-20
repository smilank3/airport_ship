


function _filter(r){

var roles=["staff","manager","assistant"]
		return roles.filter((role,i)=>{

			return role!==r;
		})
}


console.log(_filter('assistant'))

function test(name){


	return {x:'some',[name=="packageShipped"?'isShipped':name=="packageProcessed"?"isProcessed":"isDelivered"]:true};
}

console.log(test('packageProcessed'))