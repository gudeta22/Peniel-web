import React from "react";

import logo from "../assets/images/peniel.png";
import tiktok from "../assets/images/tiktok.png";
import youtube from "../assets/images/youtube.png";
import telegram from '../assets/images/telegram.png'
// import BackToTop from "./BackToTop";

function Footer() {
  

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div>
      <footer
        className="relative bg-gray-900 w-full px-10 py-20  "
        style={{
          // backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-screen-xl text-white">
          <div className="grid grid-cols-1 gap-8 px-4 lg:py-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="md:sr-only flex flex-col grow-2 w-[8rem] justify-start">
              <div className="flex select-none">
                <img src={logo} alt="" className="w-24" />
              
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-thin text-white uppercase dark:text-white fontstyle lg:text-lg">
                Contacts
              </h2>
              <ul className="text-white dark:text-white font-thin md:text-sm lg:text-lg">
                <li className="mb-4">Phone: +251-969137151</li>
                <li className="mb-4">PENIELCHURCH@gmail.com</li>
                <li className="mb-4">Addis Ababa , Ethiopia</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-thin text-white uppercase dark:text-white fontstyle lg:text-lg">
                Operating Hours
              </h2>
              <ul className="text-white dark:text-white font-thin md:text-sm lg:text-lg">
                <li className="mb-4">Sunday 5PM-8PM</li>
                <li className="mb-4">Wednsday 5PM</li>
               
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-thin text-white uppercase dark:text-white fontstyle lg:text-lg">
                Services
              </h2>
              <ul className="text-white dark:text-white font-thin md:text-sm lg:text-lg ">
                <li className="mb-4">Prayer</li>
                <li className="mb-4">Word Of GOd</li>
                <li className="mb-4">Worship</li>
                <li className="mb-4">Bible Studies</li>
              </ul>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between text-white ">
              <div className="sr-only md:sr-only  lg:not-sr-only flex flex-col grow lg:-my-10">
                <div className="flex mb-0 mx-20  items-end select-none my-7">
                  <img src={logo} alt="" className="" />
                </div>
                <div className="flex mt-4  space-x-6 sm:justify-center md:mt-0">
                  <a href="https://www.tiktok.com/@penielchurchtv" target="_blank" rel="noreferrer"  className="text-black-400 cursor-pointer">
                    <img src={tiktok} alt="WhatsApp" width="32" height="24" />
                    <span class="sr-only">WhatsApp</span>
                  </a>

                  <a
                    href="https://youtube.com/@penieltv-addis2025?si=EL26reQGscleg55T"
                    class="text-gray-400"
                    target="_blank" rel="noreferrer"
                  >
                    <img src={youtube} alt="WhatsApp" width="32" height="24" />
                    <span class="sr-only">WhatsApp</span>
                  </a>
                   <a
                    href="https://youtube.com/@penieltv-addis2025?si=EL26reQGscleg55T"
                    class="text-gray-400"
                    target="_blank" rel="noreferrer"
                  >
                    <img src={telegram} alt="WhatsApp" width="32" height="24" />
                    <span class="sr-only">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white lg:w-[100%] lg:h-[0.1px]">

          </div>
          <div className="px-4 py-6 bg-transparent md:flex md:items-center md:justify-between my-6">
            <div className=""></div>
            <span className="text-sm text-white  sm:text-center">
               <span>©{currentYear}</span>{" "}
              <a href="/about"  className="text-red-500 sr-only md:not-sr-only">
               PENIELCHURCH™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 lg:sr-only md:not-sr-only space-x-6 sm:justify-center md:mt-0">
              <a href="https://www.tiktok.com/@penielchurchtv" target="_blank" rel="noreferrer" class="text-gray-400">
                <img src={tiktok} alt="WhatsApp" width="36" height="24" />
                <span class="sr-only">WhatsApp</span>
              </a>

              <a href="https://youtube.com/@penieltv-addis2025?si=EL26reQGscleg55T" class="text-gray-400">
                <img src={youtube} alt="WhatsApp" width="36" height="24" />
                <span class="sr-only">WhatsApp</span>
              </a>
              <a href="https://t.me/Kinfegabriell" class="text-gray-400 w-10">
                <img src={telegram} alt="WhatsApp" width="30" height="20" />
                <span class="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>
          {/* <BackToTop /> */}
        </div>
      </footer>
      
    </div>
  );
}

export default Footer;
