import React from "react";
import footer from "../assets/images/bgfooter.png";
import logo from "../assets/images/peniel.png";
import whatapp from "../assets/images/tiktok.png";
import linkedin from "../assets/images/youtube.png";
// import BackToTop from "./BackToTop";

function Footer() {
  const Person = {
    phone: "+251911393207",
  };

  const handleWhatsApp = () => {
    const phoneNumber = encodeURIComponent(Person.phone);
    const message = encodeURIComponent("Hello, I would like to get in touch.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div>
      <footer
        className="relative w-full px-20 py-20  "
        style={{
          backgroundImage: `url(${footer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-screen-xl text-black">
          <div className="grid grid-cols-1 gap-8 px-4 lg:py-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="md:sr-only flex flex-col grow-2 w-[8rem] justify-start">
              <div className="flex select-none">
                <img src={logo} alt="" className="w-56" />
              \
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-black fontstyle lg:text-lg">
                Contacts
              </h2>
              <ul className="text-black dark:text-black font-medium md:text-sm lg:text-lg">
                <li className="mb-4">Phone: +251-969137151</li>
                <li className="mb-4">PENIELCHURCH@gmail.com</li>
                <li className="mb-4">Addis Ababa , Ethiopia</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-black fontstyle lg:text-lg">
                Operating Hours
              </h2>
              <ul className="text-black dark:text-black font-medium md:text-sm lg:text-lg">
                <li className="mb-4">Sunday 5PM-8PM</li>
                <li className="mb-4">Wednsday 5PM</li>
               
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-black fontstyle lg:text-lg">
                Services
              </h2>
              <ul className="text-black dark:text-black font-medium md:text-sm lg:text-lg ">
                <li className="mb-4">Remodel & Addition</li>
                <li className="mb-4">Building Permit Preparation</li>
                <li className="mb-4">3D Modeling and Rendering</li>
                <li className="mb-4">AS Built & Proposed</li>
              </ul>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between text-black ">
              <div className="sr-only md:sr-only  lg:not-sr-only flex flex-col grow lg:-my-10">
                <div className="flex mb-0 mx-20  items-end select-none my-7">
                  <img src={logo} alt="" className="" />
                </div>
                <div className="flex mt-4  space-x-6 sm:justify-center md:mt-0">
                  <a href="#/+251911393207" onClick={handleWhatsApp} className="text-black-400 cursor-pointer">
                    <img src={whatapp} alt="WhatsApp" width="32" height="24" />
                    <span class="sr-only">WhatsApp</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/misikir-zewdu-8719ba254?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5A6TCtbGTwWLVvVi0SQIaA%3D%3D"
                    class="text-gray-400"
                  >
                    <img src={linkedin} alt="WhatsApp" width="32" height="24" />
                    <span class="sr-only">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-6 bg-transparent md:flex md:items-center md:justify-between my-6">
            <span className="text-sm text-black  sm:text-center">
               <span>© {currentYear}</span>{" "}
              <a href="/about"  className="text-yellow-700 sr-only md:not-sr-only">
               PENIELCHURCH™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 lg:sr-only md:not-sr-only space-x-6 sm:justify-center md:mt-0">
              <a href="#/+251911393207" onClick={handleWhatsApp} class="text-gray-400">
                <img src={whatapp} alt="WhatsApp" width="32" height="24" />
                <span class="sr-only">WhatsApp</span>
              </a>

              <a href="https://www.linkedin.com/in/misikir-zewdu-8719ba254?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5A6TCtbGTwWLVvVi0SQIaA%3D%3D" class="text-gray-400">
                <img src={linkedin} alt="WhatsApp" width="32" height="24" />
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
