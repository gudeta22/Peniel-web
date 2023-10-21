import React from "react";
import bgweb from "../assets/images/bgforweb.png";
import { Link } from "react-router-dom";
function HomeComponent() {
  return (
    <div className=" -my-24 lg:-my-28 h-screen bg-no-repeat bg-cover lg:h-screen w-[100%]   ">
      <div
        className="flex justify-center bg-no-repeat bg-cover lg:h-screen "
        style={{
          backgroundImage: `url(${bgweb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="border lg:my-40 border-transparent rounded-md  flex lg:flex-col lg:w-[75%]  bg lg:p-20 gap-6 justify-center items-center lg:h-[30rem]  ">
          <div className="lg:flex-col lg:w-auto md:w-auto lg:mx-10 items-start">
            <h1 class="mb-4 text-2xl md:mx-20 md:text-4xl font-extrabold leading-none tracking-tight text-white   lg:text-6xl">
              Nurturing Faith, Building Community
            </h1>
          </div>
          <div className="flex lg:gap-24 my-20 ">
            <Link to="/About">
              <button className="border border-transparent delay-75 text-black hover:bg-black duration-1000 hover:text-white rounded-md lg:p-3 lg:px-10 bg-white ">
                About Us
              </button>
            </Link>
            <Link to="/Contact">
              <button className="border border-transparent lg:p-3 lg:px-10 text-black bg-white duration-1000  hover:bg-black hover:text-white rounded-md ">
                Contact Us{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
