import React from "react";
// import footer from "../assets/images/bgfooter.png";
function NavContact() {
  return (
    <div
      className=" bg-gray-200 w-full h-10 lg:h-[25rem] lg:-my-[6rem] px-20 py-32 flex justify-center bg-fixed "
      style={{
        // backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-auto flex justify-center items-center  ">
        <div className="text- text-3xl md:text-5xl font-thin  font-style ">
          <div className="fontstyle font-extralight lg:-my-10 lg:mb-5 text-center ">contact us</div>
          <div>
        <p className="  lg:text-sm lg:w-[24rem] lg:bg lg:text-center text-center  poppins font-normal text-[#686868]">
            Peniel International Church is a vibrant and inclusive religious community that brings together people from diverse backgrounds and walks of life.
          </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default NavContact;
