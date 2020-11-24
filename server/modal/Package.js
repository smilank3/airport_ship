
const mongoose=require('mongoose');

const {Schema}=mongoose;
       
const mongoSchema = new Schema({
    createdAt: { type: Date },
    orderId: { type: String },
    trackingId: { type: String },
    packages: [{
        packageName: { type: String },
        package_name: { type: String },
        no_of_packages: { type: String },
        weight_per_package: String,
        dimension_per_package: String
    }, ],

    senderFirstName: { type: String },
    senderLastName: { type: String },
    senderPhone: { type: String },
    senderEmail: { type: String },
    airportLocation: {

        airportName: String,
        airportAddress: String,

        airportZip: String,
        airportCity: String,
        airportCountry: String,
    },

    processedBy: { type: String },
    receiverFirstName: { type: String },
    receiverLastName: { type: String },
    receiverEmail: { type: String },
    receiverPhone: { type: String },
    receiverAddress: { type: String },
    receiverCity: { type: String },
    receiverApt: { type: String },
    receiverZip: { type: String },
    receiverCountry: { type: String },
    courierCompany: { type: String },
    totalCost: { type: Number },

    stripeCharge: {
        id: String,
        amount: Number,
        created: Number,
        livemode: Boolean,
        paid: Boolean,
        status: String,
    },
    payBy: { type: String },


    packageProcessed: { date: Date, isProcessed: Boolean },
    packageShipped: { date: Date, isShipped: Boolean },
    packageDelivered: { date: Date, isDelivered: Boolean },


})

 

class PackageClass{

  static async getAllPackages(){

    const packages=await this.find({});

    if(!packages){
      return [];
    }

    return packages;
  }
   
   static async getPackagesByLocation(location){

    let packages=await this.aggregate([
    {$match:{'airportLocation.airportName':{$eq:`${location}`}}},
    {$project:{packageId:'$trackingId',createdAt:'$createdAt',payBy:'$payBy',courierCompany:'$courierCompany',packageShipped:"$packageShipped",packageProcessed:"$packageProcessed",packageDelivered:'$packageDelivered',totalCost:"$totalCost"}}


      ])
  



if(!packages){
  return [];
}

return packages;


   
   }


   // get package by user Email '/user/dashboard';


   static async getPackagesByEmail(email){

    let packages=await  this.aggregate([
    {$match:{email:`${email}`}},
    {$project:{packageId:'$trackingId',createdAt:'$createdAt',payBy:'$payBy',courierCompany:'$courierCompany',packageShipped:"$packageShipped",packageProcessed:"$packageProcessed",packageDelivered:'$packageDelivered',totalCost:"$totalCost"}}


      ])


    
if(!packages){
  return [];
}

return packages;
   }



   // update package when simulating order


   static async updatePackage({trackingId,data}){

    let updatedPackage=await this.findOneAndUpdate({
      trackingId:trackingId
    },{$set:data});



    console.log(updatedPackage);

    if(!updatedPackage){
        throw new Error('could not update order')
    }

    return 1;

   }



// get shipping status by tracking id

static async getShippingStatusByTrackingId(id){

  let package_=await this.aggregate([
{$match:{'trackingId':id}},
{$project:{packageProcessed:'$packageProcessed',packageShipped:'$packageShipped',packageDelivered:'$packageDelivered'}}

    ]);
  console.log(package_)

  if(!package_ || !package_.length){
    throw new Error('Sorry, We did not find any thing. please make sure tracking id is correct');
  }


  return package_[0]; // the first one

}



}


mongoSchema.loadClass(PackageClass);

let Package=mongoose.model('Package',mongoSchema);

module.exports=Package;