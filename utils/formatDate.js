
import {format} from 'date-fns';


// formating date and time.


export const formatDate=(date)=>{

  let dateString=new Date(date).toUTCString().split(' ').slice(0,4).join(' ');
 


  return dateString+", "+format(new Date(date), 'hh:mm aa');
}

export const formatDate_2=(date)=>{
	 return format(new Date(date), 'E,LLL d,hh:mm aa');
}


export const formatDate_to_time=(date)=>{
	return format(new Date(date),'hh:mm aa');
}