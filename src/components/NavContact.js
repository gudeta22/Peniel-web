import React from "react";
// import footer from "../assets/images/bgfooter.png";
function NavComponent() {
  return (
    <div
      className=" bg-gray-900 w-full h-10 lg:h-[25rem] lg:-my-[3rem] px-20 py-32 flex justify-center bg-fixed "
      style={{
        // backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-auto flex justify-center items-center  ">
        <div className="text-white text-3xl md:text-5xl font-thin  font-style ">
          <div className="fontstyle font-extralight lg:-my-10 lg:mb-10 text-center">Contact Us</div>
          <div>
        <p className=" font-thin text-sm lg:w-[24rem] text-center">
            Peniel International Church is a vibrant and inclusive religious community that brings together people from diverse backgrounds and walks of life.
          </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default NavComponent;
