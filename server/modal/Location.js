
const mongoose=require('mongoose');

const {Schema}=mongoose;

const mongoSchema=new Schema({

	name:String,
	address:String,
	zipCode:String,
	state:String,
	country:String,
	city:String,
})



class LocationClass{


	static async getAllLocations(){

		const locations=await this.find({});

		if(!locations){

			return []
		}

		return locations;
	}

	static async addLocation(location){

        // get the modified locations list;


        try{
        	console.log(location)
        	var location=await this.create(location);

        	console.log('----------------create location')

        }catch(err){
        	console.log(err.message)
        	throw new Error(err.message)
        }


        return {status:'ok'}


	}

	static async deleteLocation(location){
           

           try{
           	var location=await this.deleteOne({name:location.name,country:location.country})

           }catch(err){
           	 console.log(err.message);

           	 throw new Error(err.message)
           }


           return {status:'ok'}

	}
}




mongoSchema.loadClass(LocationClass);

var Location=mongoose.model('Location',mongoSchema);

module.exports=Location;



