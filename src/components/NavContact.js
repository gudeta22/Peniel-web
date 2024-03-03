import React , {useEffect} from "react";
// import footer from "../assets/images/bgfooter.png";
function NavContact() {
    useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);     
  }, []); // The empty dependency array ensures that this effect runs
  return (
    <div
      className="  w-full h-10 lg:h-[25rem] lg:-my-[6rem] px-20 py-32 flex justify-center bg-fixed "
      style={{
        // backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-auto flex justify-center items-center  ">
        <div className="text- text-3xl md:text-5xl font-thin  font-style ">
          <div className="fontstyle lg:text-5xl font-extralight lg:-my-10 lg:mb-5 text-center md:text-4xl ">contact us</div>
          <div>
        <p className="  lg:text-sm lg:w-[24rem] md:w-auto sm:w-auto md:text-sm sm:text-xs text-xs  lg:bg lg:text-center text-center  poppins font-normal text-[#686868]">
            Peniel International Church is a vibrant and inclusive religious community that brings together people from diverse backgrounds and walks of life.
          </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default NavContact;
