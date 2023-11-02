import React from "react";

function ContactComponent() {
  return (
    <section className="bg-white   ">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <form action="#" className="space-y-9">
          <div>
            <h2 className="text-2xl font-light">Get In Touch</h2>
            <div class="sm:col-span-2">
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full my-10 text-sm text-gray-600 border border-gray-300 bg-gray-50  shadow-sm  dark:border-gray-300 dark:placeholder-gray-400 focus:outline-none "
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex space-x-5">
            <input
              type="text"
              className="shadow-sm bg-gray-50 border  border-gray-300 text-gray-600 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 my-5  dark:placeholder-gray-400 text-gra focus:outline-none  "
              placeholder="Your Full Name"
              required
            />

            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-600 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 my-5 dark:focus:ring-primary-500 dark:shadow-sm-light focus:outline-none "
              placeholder="Your Email"
              required
            />
            </div>
          </div>
          <div>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-600 bg-gray-50 border border-gray-300 shadow-sm  dark:placeholder-gray-400 foxus:outline-none"
              placeholder="subject"
              required
            />
          </div>

          <button
            type="submit"
            className=" px-5 text-sm  text-center hover:text-black  border hover:bg-white bg-black text-white p-2 font-light bg-primary-700 sm:w-fit  focus:ring-4 focus:outline-none  duration-1000  dark:hover:bg-primary-700 " 
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactComponent;
