import React , {useEffect} from "react";
// import footer from "../assets/images/bgfooter.png";
function NavDonate() {
    useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div
      className=" w-full h-10 lg:h-[25rem] lg:-my-[6rem] px-20 py-32 flex justify-center bg-fixed "
      style={{
        // backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-auto flex justify-center items-center  ">
        <div className="text- text-3xl md:text-5xl font-thin  font-style ">
          <div className="fontstyle font-extralight lg:-my-10 lg:mb-5 text-center "></div>
          <div>
        <p className=" m-auto  lg:text-lg lg:w-[60rem] md:text-sm sm:text-xs text-sm lg:bg lg:text-center text-center  poppins font-normal text-[#686868]">
           "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work."<br />
             <span className="lg:text-lg font-bold">2 Corinthians 9:6-8</span>
          </p>
        
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default NavDonate;
