import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-[#EEF6FA] min-h-screen overflow-hidden">
      <div className="bg-[#EEF6FA] min-h-screen px-6 py-10 pt-28">
        <title>Contact us | PolyMech Engineers</title>
        <h1 className="text-6xl font-bold text-center pt-6 tracking-wider font-Montserrat">
          CONTACT{" "}
          <span className="text-yellow-400 px-2 pr-14 rounded-r-3xl tracking-wider">
            US
          </span>
        </h1>
        <div className="bg-[#1e1e1ec7] text-white rounded-lg p-8 md:p-16 flex flex-col md:flex-row justify-between gap-10">

        {/* Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Contact Form</h2>
          <p className="mb-6 text-lg font-bold">
            If You Got any question<br />
            Please Do not hesitate to send us a message.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Full name"
              className="w-full p-3 rounded-md bg-white text-black"
            />
            <input
              type="email"
              placeholder="Your Email id"
              className="w-full p-3 rounded-md bg-white text-black"
            />
            <input
              type="tel"
              placeholder="Your Phone number"
              className="w-full p-3 rounded-md bg-white text-black"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded-md bg-white text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold text-lg hover:bg-yellow-500 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

      {/* Info */}
      <div className="flex-1 space-y-8 mt-34">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt size={24} className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Address</h3>
              <p>
                Industrial Estate 22/68 Ganesh nagar 9th lane, Ichalkaranji
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope size={24} className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <p>polymecheng@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt size={24} className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-bold">Contact</h3>
              <p>Tel: +91 9665756396, +91 9422582439</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google map api */}
      <div className="w-full h-screen font-sans bg-yellow-400 flex justify-center items-center">
        <h3 className="font-bold text-6xl ">Google map API</h3>
      </div>
      </div>
      </motion.div>
    //   </div>
    // </motion.div>
  );
};

export default Contact;
