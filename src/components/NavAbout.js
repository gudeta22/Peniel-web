import React from "react";
// import footer from "../assets/images/bgfooter.png";
function NavAbout() {
  return (
    <div
      className="   w-full h-5 lg:h-[20rem] lg:-my-[6rem] px-10  flex justify-center bg-fixed "
      style={{
        // backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-auto flex justify-center items-center  ">
        <div className="text-gray-800 text-3xl md:text-5xl font-thin  font-style ">
          <div className="fontstyle font-extralight lg:-my-10 lg:mb-5 text-center">About Us</div>

        
        </div>
      </div>
    </div>
  );
}

export default NavAbout;
