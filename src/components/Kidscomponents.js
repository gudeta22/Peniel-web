import React from "react";
import person1 from "../assets/images/kids.jpg";
import person2 from "../assets/images/kids2.jpg";
import person3 from "../assets/images/kids3.jpg";
import person4 from '../assets/images/kids5.jpg';
import person5 from '../assets/images/kidsnew.jpg';
import person6 from '../assets/images/kids6.jpg';

import '../index.css'
function Kidscomponents() {
  const experties = [
    {
      id: 1,
      src: person1,
      name: "Jhon Sunsa",
      role: `Creative director`,
    },
    {
      id: 2,
      src: person2,
      name: "Smith J White",
      role: `Creative director`,
    },
    {
      id: 3,
      src: person3,
      name: "Jayson Brouni",
      role: `Creative director`,
    },
     {
      id: 4,
      src: person4,
      name: "Jayson Brouni",
      role: `Creative director`,
    },
    {
      id: 5,
      src: person5,
      name: "Jayson Brouni",
      role: `Creative director`,
    },
      {
      id: 5,
      src: person6,
      name: "Jayson Brouni",
      role: `Creative director`,
    },
   
  ];
  return (
    <div className=" container m-auto  mt-[2rem] sm:flex  ">
      <div className=" sm:text-center ">
        <div className=" sm:m-auto sm:w-[500px]">
          <div className=" flex items-center sm:justify-center sm:text-center ">
           
            
          </div>
          <div  className="w-auto h-auto">
             <h2 className="mb-3 font-semibold fontstyle text-left text-[27px] mt-9  text-[#1d2434]  sm:text-center lg:text-4xl ">
                 NURTURING KIDS THE KINGDOM OF GOD
             </h2>
          </div>
         
        </div>

        <div className=" sm:m-auto sm:w-[500px] sm:grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:w-[690px] lg:w-[75rem] lg:my-14 md:my-14 ">
          {experties.map((experties, id) => (
            <div key={id} className="group lg:-mb-40 rounded-lg relative  overflow-hidden bg-contain ">
                {/* <img src={experties.src} alt="img" className="" /> */}
                <div className="lg:h-[25rem]">
              <img src={experties.src} alt="img" className="w-full h-[20rem] duration-500   object-cover transition " />
              </div>
              <div className=" child relative  z-10 bg-white w-full transition  duration-500 my-10 mt-20 ">
                
                <div className="flex items-center sm:justify-center  sm:text-center mr-48">
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kidscomponents;
