import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/GalleryPage/1.webp";
import img2 from "../assets/GalleryPage/2.webp";
import img3 from "../assets/GalleryPage/3.webp";
import img4 from "../assets/GalleryPage/4.webp";
import img6 from "../assets/GalleryPage/6.webp";
import img7 from "../assets/GalleryPage/7.webp";
import img8 from "../assets/GalleryPage/8.webp";
import img9 from "../assets/GalleryPage/9.webp";
import img10 from "../assets/GalleryPage/10.webp";
import img11 from "../assets/GalleryPage/11.webp";
import img12 from "../assets/GalleryPage/12.webp";
import img13 from "../assets/GalleryPage/13.webp";
import img14 from "../assets/GalleryPage/14.webp";
import img15 from "../assets/GalleryPage/15.webp";
import img16 from "../assets/GalleryPage/16.webp";
import img17 from "../assets/GalleryPage/17.webp";
import img18 from "../assets/GalleryPage/18.webp";
import img20 from "../assets/GalleryPage/20.webp";
import img21 from "../assets/GalleryPage/21.webp";
import img22 from "../assets/GalleryPage/22.webp";
import img24 from "../assets/GalleryPage/24.webp";
import img25 from "../assets/GalleryPage/25.webp";
import img26 from "../assets/GalleryPage/26.webp";

import img30 from "../assets/GalleryPage/30.webp";
import img31 from "../assets/GalleryPage/31.webp";
import img32 from "../assets/GalleryPage/32.webp";

import img35 from "../assets/GalleryPage/35.webp";
import img36 from "../assets/GalleryPage/36.webp";
import img37 from "../assets/GalleryPage/37.webp";
import img38 from "../assets/GalleryPage/38.webp";
import img39 from "../assets/GalleryPage/39.webp";
import img40 from "../assets/GalleryPage/40.webp";
import img41 from "../assets/GalleryPage/41.webp";
import img42 from "../assets/GalleryPage/42.webp";
import img43 from "../assets/GalleryPage/43.webp";
import img44 from "../assets/GalleryPage/44.webp";
import img45 from "../assets/GalleryPage/45.webp";
import img46 from "../assets/GalleryPage/46.webp";
import img47 from "../assets/GalleryPage/47.webp";
import img48 from "../assets/GalleryPage/48.webp";
import img49 from "../assets/GalleryPage/49.webp";
import img50 from "../assets/GalleryPage/50.webp";
import img51 from "../assets/GalleryPage/51.webp";
import img52 from "../assets/GalleryPage/52.webp";
import img53 from "../assets/GalleryPage/53.webp";

import img55 from "../assets/GalleryPage/55.webp";
import img56 from "../assets/GalleryPage/56.webp";

import vid1 from "../assets/GalleryPage/26.mp4";
import vid2 from "../assets/GalleryPage/27.mp4";
import vid3 from "../assets/GalleryPage/28.mp4";
import vid4 from "../assets/GalleryPage/v1.mp4";
import vid5 from "../assets/GalleryPage/v2.mp4";

const sections = [
  { id: "products", title: "Products" },
  { id: "machinery", title: "Machinery" },
  { id: "team", title: "Team" },
  { id: "videos", title: "Videos" },
];

const galleryContent = {
  products: [
    img3,
    img47,
    img49,
    img50,
    img2,
    img6,
    img7,
    img53,
    img8,
    img9,
    img10,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img20,
    img21,
    img22,
    img24,
    img25,
    img30,
    img31,
    img32,
    img40,
  
    img37,
    img45,
    img46,

    img1,
    img4,
  ],
  machinery: [ img39, img35, img44, img36, img43,   img41],
  team: [img55],
  videos: [vid5,vid1,vid3, vid4, ],
};

const Gallery = () => {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (id) => {
    setActiveSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
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
      className="bg-[#EEF6FA] min-h-screen overflow-hidden px-4 pt-28 pb-10"
    >
      <title>Gallery | Polymech Engineers</title>
      <h1 className="font-bold text-center mb-10 text-2xl md:text-6xl">
        OUR{" "}
        <span className="bg-yellow-400 px-2 pr-10 rounded-r-3xl md:pr-14">
          GALLERY
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {sections.map((section) => (
          <div key={section.id}>
            <motion.div
              onClick={() => toggleSection(section.id)}
              className="cursor-pointer bg-white rounded-xl shadow-md p-6 text-center text-xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              {section.title}
            </motion.div>

            <AnimatePresence>
              {activeSections.includes(section.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 bg-white rounded-md shadow-inner overflow-hidden"
                >
                  <div className="p-4 columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                    {galleryContent[section.id].length === 0 ? (
                      <div className="text-center text-gray-500">
                        No items to show yet.
                      </div>
                    ) : (
                      galleryContent[section.id].map((item, index) => (
                        <div
                          key={index}
                          className="break-inside-avoid mb-4 rounded-lg overflow-hidden shadow-sm"
                        >
                          {item.includes("mp4") ? (
                            <video
                              src={item}
                              muted
                              loop
                              playsInline
                              onMouseEnter={(e) => e.target.play()}
                              onMouseLeave={(e) => {
                                e.target.pause();
                                e.target.currentTime = 0;
                              }}
                              className="w-full h-auto rounded-lg transition duration-300 hover:scale-[1.02]"
                            />
                          ) : (
                            <img
                              src={item}
                              alt={`Gallery item ${index + 1}`}
                              className="w-full h-auto rounded-lg"
                            />
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
