import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
  const containerStyle = {
    width: "100%",
    height: "600px",
    borderRadius: "12px",
  };

  const center = {
    lat: 16.712995529174805,
    lng: 74.44988250732422,
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    await fetch("https://polymechengineers-backend.onrender.com/send-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-[#EEF6FA] min-h-screen overflow-hidden"
    >
      <div className="bg-[#EEF6FA] min-h-screen px-4 sm:px-6 lg:px-10 py-10 pt-28">
        <title>Contact us | PolyMech Engineers</title>
        <div className="flex justify-center text-center">
  <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold pt-6 tracking-wider font-Montserrat">
    CONTACT
    <span className="text-yellow-400 px-2 md:px-4 lg:px-6 rounded-r-3xl tracking-wider">
      US
    </span>
  </h1>
</div>


        <div className="bg-[#1e1e1ec7] text-white rounded-lg p-6 md:p-10 lg:p-16 flex flex-col lg:flex-row justify-between gap-10 mt-10">
          {/* Form */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Form</h2>
            <p className="mb-6 text-md md:text-lg font-bold">
              If You Got any question
              <br />
              Please Do not hesitate to send us a message.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Full name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email id"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-black"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-black"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white text-black"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-2 md:px-8 md:py-3 rounded-xl font-bold text-md md:text-lg hover:bg-yellow-500 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-8 mt-10 lg:mt-32">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt size={24} className="text-yellow-400 mt-1.5" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Address</h3>
                <a
                  href="https://www.google.com/maps/place/Polymech+Engineers/@16.712985,74.449895,21z/data=!4m6!3m5!1s0x3bc11d75abee1e31:0x60ba7aa36bc161e3!8m2!3d16.7129848!4d74.4498953!16s%2Fg%2F11fz0tvdts?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-md md:text-xl hover:text-yellow-400 transition">
                    Industrial Estate 22/68 Ganesh nagar 9th lane, Ichalkaranji
                  </p>
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope size={24} className="text-yellow-400 mt-1.5" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Email</h3>
                <p className="text-md md:text-xl hover:text-yellow-400 transition">
                  polymecheng@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt size={24} className="text-yellow-400 mt-1" />
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold">Contact</h3>
                <div className="flex flex-wrap gap-x-2">
                  <p className="text-md md:text-xl">Tel:</p>
                  <p className="text-md md:text-xl hover:text-yellow-400 transition">
                    +91 9665756396,
                  </p>
                  <p className="text-md md:text-xl hover:text-yellow-400 transition">
                    +91 9422582439
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google map api */}
        <div className="mt-10">
          <LoadScript googleMapsApiKey="AIzaSyBVPadoh6P29Ogjvs0jQlJ2o-SKP9x5dOw">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;