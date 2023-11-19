import React, { useRef, useState , useEffect } from "react";
import emailjs from "@emailjs/browser";
function ContactComponent() {
   const form = useRef();
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  // const [alertMessage, setAlertMessage] = useState("");
  
  // Function to show the alert
  const showAlert = () => {
    // setAlertMessage(message);
    setAlert(true);
  };

  // Function to hide the alert
  const hideAlert = () => {
    setAlert(false);
    // setAlertMessage("");
  };

  const sendEmail = (e) => {
    setEmail("");
    setFirstname("");
    setMessage("");
    e.preventDefault();
    setAlert(true)

    emailjs
      .sendForm("service_hfxwehb", "template_ij8a79f", form.current, "kh1d7ovz6_5F4yZfI")
      .then(
        (result) => {
          console.log(result.text);
          showAlert("Your message has been sent successfully.");
        },
        (error) => {
          console.log(error.text);
          showAlert("There was an error sending your message.");
        }
      );
  };

  // Use useEffect to hide the alert after a few seconds
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => {
        hideAlert();
      }, 3000); // Hide the alert after 3 seconds (adjust as needed)
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  return (
    <section className="bg-white   ">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <form className="space-y-9" ref={form} onSubmit={sendEmail}>
          <div>
            <h2 className="text-2xl font-light">Get In Touch</h2>
             <div class="sm:col-span-2">
            <textarea
              id="message"
              name="message"
              rows="6"
              class="block p-2.5 w-full my-10 text-sm text-gray-600 border border-gray-300 bg-gray-50  shadow-sm  dark:border-gray-300 dark:placeholder-gray-400 focus:outline-none "
              placeholder="Your Message"
              required
              onChange={event => setMessage(event.target.value)}
              value={message}
            ></textarea>
          </div>

            <div className="flex space-x-5">
              <input
                type="text"
                className="shadow-sm bg-gray-50 border  border-gray-300 text-gray-600 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 my-5  dark:placeholder-gray-400 text-gra focus:outline-none  "
                placeholder="Your Full Name"
                name="from_name"
                required
                onChange={event => setFirstname(event.target.value)}
                value={firstName}
              />

              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-600 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 my-5 dark:focus:ring-primary-500 dark:shadow-sm-light focus:outline-none "
                placeholder="Your Email"
                name="email"
                required
                onChange={event => setEmail(event.target.value)}
                value={email}
              />
            </div>
          </div>

         

          <button
            type="submit"
            className=" px-5 text-sm  text-center hover:text-black  border hover:bg-white bg-black text-white p-2 font-light bg-primary-700 sm:w-fit  focus:ring-4 focus:outline-none  duration-1000  dark:hover:bg-primary-700
             "
            
          >
            SUBMIT
          </button>
        </form>
         {alert && (
<div className="fixed max-w-screen-sm transition delay-150  top-0 left-0 right-0 z-50 flex items-center m-auto lg:my-5 justify-center  p-3 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
     <svg
          className="w-6 h-6 border rounded-full border-green-500 text-green-500 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
    <span className="sr-only">Info</span>
    <div>
      <span className="font-medium">Submitted successfully!</span>
    </div>
  </div>
        )}
      </div>
     
    </section>
  );
}

export default ContactComponent;
