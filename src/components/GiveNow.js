import React from 'react';
import { Link } from 'react-router-dom';

const GiveNow = () => {

  
  return (
    <div className="min-h-screen bg-gray- py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-slate-900 from-slate-600 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-yellow-500 shadow-lg sm:rounded-3xl sm:p-8 lg:p-20">
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-thin">Give Now</h1>
          <div className="max-w-xl mx-auto mt-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-thin">
             "Thank you for your generous donation! Your support propels our mission forward and positively impacts our community. Grateful for your contribution!""
            </h3>
           
          </div>
          <div className="max-w-xl mx-auto h-auto mt-6">
            <div className=" p-4 rounded">
              <h2 className="text-lg sm:text-xl lg:text-4xl font-thin mb-4 ">Wire Transfer</h2>
              <p className="text-gray-600 mb-2">Account No: 01352420246301</p>
              <p className="text-gray-600 mb-2">Swift Code: AWINETAA</p>
              <p className="text-gray-600 mb-2">Awash Bank - Addis Ababa, Ethiopia</p>
            </div>
            <div className=" p-4 rounded mt-16 flex ">
              
              <Link to="/donate" className="w-full bg-black lg:p-3 text-white text-center font-bold py-2 rounded hover:from-cyan-600 hover:to-light-blue-600">
               ONLINE GIVING
                <h1 className='text-green-500'>DONATE NOW</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveNow;
