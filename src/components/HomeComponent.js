import React from "react";
import bgweb from "../assets/images/bgforweb.png";
import { Link } from "react-router-dom";
function HomeComponent() {
  return (
    <div className=" -my-24 lg:-my-28 h-screen bg-no-repeat bg-cover lg:h-screen w-[100%]  md:w-auto  sm:w-auto  ">
      <div
        className="flex justify-center bg-no-repeat bg-cover lg:h-screen h-screen md:h-screen sm:h-screen "
        style={{
          backgroundImage: `url(${bgweb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="border lg:my-40 border-transparent rounded-md flex flex-col    lg:flex-col lg:w-[75%]  bg lg:p-20 gap-6 justify-center items-center lg:h-[30rem]  ">
          <div className="lg:flex-col lg:w-auto md:w-auto lg:mx-10 m-auto mx-15 ">
            <div className="flex flex-col">
            <h1 class=" font-mono mb-2 m-16 text-2xl md:mx-20 md:text-2xl font-extrabold leading-none tracking-tight text-white lg:text-6xl">

              Nurturing Faith, Building Community
            </h1>
            <div className="bg-white w-[10rem] lg:w-[15rem] lg:mx-20 h-1 mx-16 "></div>
            </div>
             <p className="font-mono font-bold m-10 text-white lg:mx-24">
           The information provided offers a glimpse into the history and ethos of Peniel International Church. Founded in 2012, the church was established by a group of forward-thinking individuals who recognized the importance of creating a place where people from various nations could gather for worship and fellowship. </p>
          </div>
           <Link to="/Contact" className="">
              <button className="p-3  mx-5 w-15  md:mx-9 border border-transparent lg:p-3 lg:px-10 text-black bg-white duration-1000  hover:bg-black hover:text-white rounded-md ">
                Contact Us{" "}
              </button>
            </Link>
          
          <div className="flex lg:gap-24 mb-16 ">
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
