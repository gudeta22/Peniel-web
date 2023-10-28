import React , {useEffect} from "react";
import About2 from "../assets/images/pator.jpg";
import { Link } from "react-router-dom";
function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="container m-auto">
      <div className=" px-4 grid  md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 gap-6 py-36">
        <div className=" py-7 flex flex-col justify-center gap-8">
          <span className="flex items-center  font-bold">
            
            <p>OUR STORY</p>
          </span>
          
          <p className="poppins font-normal text-[#686868]">
           The information provided offers a glimpse into the history and ethos of Peniel International Church. Founded in 2012, the church was established by a group of forward-thinking individuals who recognized the importance of creating a place where people from various nations could gather for worship and fellowship. From its inception, the church has continuously evolved, adapting to the changing needs of its congregation and embracing the rich diversity of cultures and traditions that make up its global community.<br /><br />

           This church's story reflects a commitment to unity, inclusivity, and cultural diversity. It's a testament to the power of faith to transcend boundaries and bring people from different backgrounds together under the common umbrella of spiritual growth and shared values. Peniel International Church's mission is likely centered around building bridges between cultures and fostering a sense of belonging for all its members, regardless of their national or cultural origins
    
          </p>
          <Link to="/about" >
          </Link>
        </div>

        <div className="flex  ">
         
          <div className="border   rounded-lg md:-right-[109px] md:top-4 mi:top-7 mi:right-0 lg:top-7 lg:-right-[40px]  ">
            <img className="bg-cover border border-transparent rounded-tl-3xl rounded-br-xl " src={About2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
