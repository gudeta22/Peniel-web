import React from 'react'
import bgcompo from '../assets/images/bgforwebpage.jpg'
function Bodycomponets() {
  return (
    <div>
         <div
        className="flex justify-center bg-no-repeat bg-cover lg:h-screen bg-fixed "
        style={{
          backgroundImage: `url(${bgcompo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
      </div>
    </div>
  )
}

export default Bodycomponets