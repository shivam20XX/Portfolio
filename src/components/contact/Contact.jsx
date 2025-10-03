import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [setIsSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tq7xok7",
        "template_s5t3yjk",
        form.current,
        "gVDVxFbaYbiXuGb3i"
      )
      .then(() => {
        setIsSent(true);
        form.current.reset(); //resets the form to intial state;
        toast.success("Message sent succesfully!", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        toast.error("Failed to send message", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      });
  };

  return (
    <section
      id="contact"
      className=" flex flex-col items-center justify-center py-24 px-[12vw] md:px-[17vw] lg:[20vw]"
    >
      <ToastContainer />
      <div className="text-center mb-16">
        <h2 className="text-4xl text-pink-400 font-bold">Contact</h2>
        <div className="w-32 h-1 bg-pink-200 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you for any opportunities or questions!
        </p>
      </div>

      {/* contact form */}

      <div className="mt-8 w-full max-w-md p-6 bg-[#1b113a] rounded-lg border border-pink-600 shadow-lg mx-auto">
        <h3 className="text-xl font-semibold text-white text-center">
          Contact with me
        </h3>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="text"
            name="userName"
            placeholder="Your Name here"
            required
            className="w-full p-3 rounded-md bg-[#1b113a] text-white border border-pink-500 focus:outline-none focus:border-pink-300"
          />
          <input
            type="email"
            name="userEmail"
            placeholder="Your email here"
            required
            className="w-full p-3 rounded-md bg-[#1b113a] text-white border border-pink-500 focus:outline-none focus:border-pink-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="What's this about"
            required
            className="w-full p-3 rounded-md bg-[#1b113a] text-white border border-pink-500 focus:outline-none focus:border-pink-300"
          />
          <textarea
            name="message"
            placeholder="Enter your message or just hi!"
            rows={4}
            required
            className="w-full p-3 rounded-md bg-[#1b113a] text-white border border-pink-500 focus:outline-none focus:border-pink-300"
          ></textarea>

          {/* submit button */}

          <button
            type="submit"
            className="w-full p-3 bg-pink-400 text-white font-medium rounded-md hover:bg-pink-700 transition-colors cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
