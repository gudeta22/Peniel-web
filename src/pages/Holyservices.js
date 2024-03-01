import React,{useEffect} from 'react'
import Youtube from '../components/Youtube';


function Holyservices() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className=' text-red-600  '>
      <Youtube />
    </div>
  )
}

export default Holyservices;