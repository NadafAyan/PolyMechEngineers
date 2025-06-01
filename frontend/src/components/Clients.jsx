import React from "react";
import img1 from "../assets/Clients/Aequs.jpg";
import img2 from "../assets/Clients/Alkop.jpg";
import img3 from "../assets/Clients/Elcom.jpg";
import img4 from "../assets/Clients/i.jpg";
import img5 from "../assets/Clients/Mechasoft.jpg";
import img6 from "../assets/Clients/pdl.jpg";
import img7 from "../assets/Clients/prestige.jpg";
import img8 from "../assets/Clients/unknw.jpg";

const clients = [img1, img2, img3, img4, img5, img6, img7, img8];

const Clients = () => {
  return (
    <div className="bg-[#EEF6FA] py-16 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our <span className="text-yellow-400">Clients</span>
      </h2>

      <div className="relative w-full overflow-x-hidden">
        <div className="flex w-max animate-scroll gap-16 px-4 md:px-12">
          {clients.concat(clients).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`client-${idx}`}
              className="h-24 md:h-28 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
