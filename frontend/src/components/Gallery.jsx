import {React, useEffect} from "react";
import { motion } from "framer-motion";

// Image imports (1 to 25)
import img1 from "../assets/GalleryPage/1.jpg";
import img2 from "../assets/GalleryPage/2.jpg";
import img3 from "../assets/GalleryPage/3.jpg";
import img4 from "../assets/GalleryPage/4.jpg";
import img5 from "../assets/GalleryPage/5.jpg";
import img6 from "../assets/GalleryPage/6.jpg";
import img7 from "../assets/GalleryPage/7.jpg";
import img8 from "../assets/GalleryPage/8.jpg";
import img9 from "../assets/GalleryPage/9.jpg";
import img10 from "../assets/GalleryPage/10.jpg";
import img11 from "../assets/GalleryPage/11.jpg";
import img12 from "../assets/GalleryPage/12.jpg";
import img13 from "../assets/GalleryPage/13.jpg";
import img14 from "../assets/GalleryPage/14.jpg";
import img15 from "../assets/GalleryPage/15.jpg";
import img16 from "../assets/GalleryPage/16.jpg";
import img17 from "../assets/GalleryPage/17.jpg";
import img18 from "../assets/GalleryPage/18.jpg";
import img19 from "../assets/GalleryPage/19.jpg";
import img20 from "../assets/GalleryPage/20.jpg";
import img21 from "../assets/GalleryPage/21.jpg";
import img22 from "../assets/GalleryPage/22.jpg";
import img23 from "../assets/GalleryPage/23.jpg";
import img24 from "../assets/GalleryPage/24.jpg";
import img25 from "../assets/GalleryPage/25.jpg";

// Video imports (26 to 28)
import vid1 from "../assets/GalleryPage/26.mp4";
import vid2 from "../assets/GalleryPage/27.mp4";
import vid3 from "../assets/GalleryPage/28.mp4";

// Mixed media array
const mediaItems = [
  { type: "image", src: img1 },
  { type: "video", src: vid1 },
  { type: "image", src: img2 },
  { type: "image", src: img3 },
  { type: "video", src: vid2 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
  { type: "video", src: vid3 },
  { type: "image", src: img6 },
  { type: "image", src: img7 },
  { type: "image", src: img8 },
  { type: "image", src: img9 },
  { type: "image", src: img10 },
  { type: "image", src: img11 },
  { type: "image", src: img12 },
  { type: "image", src: img13 },
  { type: "image", src: img14 },
  { type: "image", src: img15 },
  { type: "image", src: img16 },
  { type: "image", src: img17 },
  { type: "image", src: img18 },
  { type: "image", src: img19 },
  { type: "image", src: img20 },
  { type: "image", src: img21 },
  { type: "image", src: img22 },
  { type: "image", src: img23 },
  { type: "image", src: img24 },
  { type: "image", src: img25 },
];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-[#EEF6FA] min-h-screen overflow-hidden"
    >
      <title>Gallery | PolyMech Engineers</title>

      <div className="bg-[#EEF6FA] min-h-screen px-6 py-10 pt-28">
        <h1 className="text-6xl font-bold text-center pt-6 mb-10">
          OUR{" "}
          <span className="bg-yellow-400 px-2 pr-14 rounded-r-3xl">
            GALLERY
          </span>
        </h1>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 px-4">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid rounded overflow-hidden shadow-lg"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full object-cover rounded"
                />
              ) : (
                <div className="relative">
                  <video
                    loading="lazy"
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-full object-cover rounded transition-transform duration-300 hover:scale-105"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  />

                  <div className="absolute top-2 right-2 bg-black/60 text-white p-1 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                // <video
                //   src={item.src}
                //   muted
                //   loop
                //   playsInline
                //   className="w-full object-cover rounded transition-transform duration-300 hover:scale-105"
                //   onMouseEnter={(e) => e.target.play()}
                //   onMouseLeave={(e) => e.target.pause()}
                // />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
