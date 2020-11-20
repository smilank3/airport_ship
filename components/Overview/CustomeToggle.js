
import {useAccordionToggle} from 'react-bootstrap/AccordionToggle'
import {FaChevronDown,FaChevronUp} from 'react-icons/fa'
import Reat,{useContext} from 'react'
import AccordionContext from 'react-bootstrap/AccordionContext'

function CustomToggle({ children, eventKey,callback }) {

  const currentEventKey=useContext(AccordionContext);


  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
 <div onClick={decoratedOnClick} >{children} <span style={{float:'right'}} >

{!isCurrentEventKey?(<FaChevronDown/>):(<FaChevronUp/>)}



  </span></div> 
  );
}

export default CustomToggle;
