import {React, useEffect, useState,useRef} from "react";
import { motion } from "framer-motion";

// Image imports (1 to 25)
import img1 from "../assets/GalleryPage/1.jpg";
import img2 from "../assets/GalleryPage/2.png";
import img3 from "../assets/GalleryPage/3.jpg";
import img4 from "../assets/GalleryPage/4.jpg";
import img6 from "../assets/GalleryPage/6.jpg";
import img7 from "../assets/GalleryPage/7.jpg";
import img8 from "../assets/GalleryPage/8.jpg";
import img9 from "../assets/GalleryPage/9.jpg";
import img10 from "../assets/GalleryPage/10.png";
import img11 from "../assets/GalleryPage/11.jpg";
import img12 from "../assets/GalleryPage/12.jpg";
import img13 from "../assets/GalleryPage/13.png";
import img14 from "../assets/GalleryPage/14.jpg";
import img15 from "../assets/GalleryPage/15.jpg";
import img16 from "../assets/GalleryPage/16.jpg";
import img17 from "../assets/GalleryPage/17.jpg";
import img18 from "../assets/GalleryPage/18.jpg";
import img20 from "../assets/GalleryPage/20.png";
import img21 from "../assets/GalleryPage/21.jpg";
import img22 from "../assets/GalleryPage/22.jpg";
import img23 from "../assets/GalleryPage/23.jpg";
import img24 from "../assets/GalleryPage/24.jpg";
import img25 from "../assets/GalleryPage/25.jpg";
import img26 from "../assets/GalleryPage/26.jpg";
import img27 from "../assets/GalleryPage/27.jpg";
import img28 from "../assets/GalleryPage/28.jpg";
import img29 from "../assets/GalleryPage/29.jpg";
import img30 from "../assets/GalleryPage/30.png";
import img31 from "../assets/GalleryPage/31.jpg";
import img32 from "../assets/GalleryPage/32.jpg";
import img34 from "../assets/GalleryPage/34.jpg";
import img35 from "../assets/GalleryPage/35.jpg";
import img36 from "../assets/GalleryPage/36.jpg";
import img37 from "../assets/GalleryPage/37.jpg";
import img38 from "../assets/GalleryPage/38.png";
import img39 from "../assets/GalleryPage/39.png";
import img40 from "../assets/GalleryPage/40.jpg";
import img41 from "../assets/GalleryPage/41.png";
import img42 from "../assets/GalleryPage/42.jpg";
import img43 from "../assets/GalleryPage/43.png";
import img44 from "../assets/GalleryPage/44.png";
import img45 from "../assets/GalleryPage/45.jpg";
import img46 from "../assets/GalleryPage/46.jpg";
import img47 from "../assets/GalleryPage/47.jpg";
import img48 from "../assets/GalleryPage/48.jpg";
import img49 from "../assets/GalleryPage/49.png";
import img50 from "../assets/GalleryPage/50.png";
import img51 from "../assets/GalleryPage/51.png";
import img52 from "../assets/GalleryPage/52.jpg";
import img53 from "../assets/GalleryPage/53.jpg";
import img54 from "../assets/GalleryPage/54.jpg";
import img55 from "../assets/GalleryPage/55.jpg";
import img56 from "../assets/GalleryPage/56.jpg";
// import img24 from "../assets/GalleryPage/24.jpg";


// Video imports (26 to 28)
import vid1 from "../assets/GalleryPage/26.mp4";
import vid2 from "../assets/GalleryPage/27.mp4";
import vid3 from "../assets/GalleryPage/28.mp4";
import vid4 from "../assets/GalleryPage/v1.mp4";
import vid5 from "../assets/GalleryPage/v2.mp4";

// Mixed media array
const mediaItems = [
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "image", src: img24 },
  { type: "video", src: vid1 },
  { type: "image", src: img4 },
  { type: "image", src: img40 },
  { type: "image", src: img7 },
  { type: "image", src: img8 },
  { type: "image", src: img9 },
  { type: "image", src: img10 },
  { type: "image", src: img11 },
  { type: "video", src: vid2 },
  { type: "image", src: img12 },
  { type: "image", src: img13 },
  { type: "image", src: img14 },
  { type: "image", src: img15 },
  { type: "image", src: img16 },
  { type: "image", src: img17 },
  { type: "image", src: img18 },
  { type: "image", src: img20 },
  { type: "image", src: img21 },
  { type: "image", src: img22 },
  { type: "image", src: img23 },
  { type: "image", src: img3 },
  { type: "video", src: vid3 },
  { type: "image", src: img25 },
  { type: "image", src: img26 },
  { type: "image", src: img27 },
  { type: "image", src: img28 },
  { type: "image", src: img29 },
  { type: "image", src: img30 },
  { type: "image", src: img31 },
  { type: "image", src: img32 },
  { type: "video", src: vid4 },
  { type: "image", src: img34 },
  { type: "image", src: img35 },
  { type: "image", src: img36 },
  { type: "image", src: img37 },
  { type: "image", src: img38 },
  { type: "image", src: img39 },
  { type: "image", src: img6 },
  { type: "image", src: img44 },
  // { type: "image", src: img42 },
  { type: "image", src: img43 },
  { type: "image", src: img41 },
  { type: "video", src: vid5 },
  { type: "image", src: img45 },
  { type: "image", src: img46 },
  { type: "image", src: img47 },
  { type: "image", src: img48 },
  { type: "image", src: img49 },
  { type: "image", src: img50 },
  { type: "image", src: img51 },
  { type: "image", src: img52 },
  { type: "image", src: img53 },
  { type: "image", src: img54 },
  { type: "image", src: img55 },
  { type: "image", src: img56 },
];


const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page

    // Detect mobile screen
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
        <h1 className="font-bold text-center pt-6 mb-10 text-2xl md:text-6xl">
          OUR{" "}
          <span className="bg-yellow-400 px-2 pr-10 rounded-r-3xl md:pr-14">
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
                    src={item.src}
                    muted
                    loop
                    playsInline
                    //preload="none"
                    autoPlay={isMobile}
                    className="w-full object-cover rounded transition-transform duration-300 hover:scale-105"
                    onMouseEnter={(e) => !isMobile && e.target.play()}
                    onMouseLeave={(e) => !isMobile && e.target.pause()}
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
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
