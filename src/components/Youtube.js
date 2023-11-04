import React, { useState, useEffect } from 'react';

function Youtube() {
  const [isLoading, setLoading] = useState(true);
  const [youtube , setYoutube] = useState(false)

  // Simulate loading with a delay
  useEffect(() => {
    
     if(setLoading === true){
      setYoutube(false)
     } else if(setLoading === false){
      setYoutube(true)
     }
   // Adjust the delay as needed
    
  }, []);
 

  return (
    <div className='lg:h-screen'>
      {isLoading && 
        <div className="lg:mb-32  lg:grid lg:mx-80  lg:grid-cols-3 gap-20   rounded-md my-4">
          <div className='lg:h-[20rem] lg:m-10   lg:w-[28rem]   animate-pulse bg-gradient-to-r from-gray-200 to-gray-300'>
            
          </div>
         <div className='lg:h-[20rem] lg:m-10 lg:mx-10   lg:w-[28rem]   animate-pulse bg-gradient-to-r from-gray-200 to-gray-300'>
            
          </div>
           <div className='lg:h-[20rem] lg:m-10   lg:w-[28rem]   animate-pulse bg-gradient-to-r from-gray-200 to-gray-300'>
            
          </div>
           <div className='lg:h-[20rem] lg:m-10   lg:w-[28rem]   animate-pulse bg-gradient-to-r from-gray-200 to-gray-300'>
            
          </div>
            <div className='lg:h-[20rem] lg:m-10   lg:w-[28rem]   animate-pulse bg-gradient-to-r from-gray-200 to-gray-300'>
            
          </div>
          <div className='lg:h-[20rem] lg:m-10   lg:w-[28rem]   animate-pulse bg-gradient-to-r from-gray-200 to-gray-300'>
            
          </div>
       
          
         
        </div>

   }   {youtube && <div>
          <div className="w-auto h-auto">
            <h2 className="mb-3 mx-6 font-semibold fontstyle text-left text-[20px] mt-9 text-[#1d2434] sm:text-center lg:text-4xl">
              SOME OF OUR YOUTUBE SERMONS
            </h2>
          </div>
          <div className='lg:m-[10rem] sm:m-[5rem] m-10'>
            <div className="elfsight-app-82dac7dc-ec9a-4eaa-bb66-3b7624d2fc1c w-[15rem] mx-auto"></div>
          </div>
        </div>}
        
      
    </div>
  );
}

export default Youtube;
