// export default function ScrollingClients() {
//     const logos = [
//       { src: "https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg", alt: "Facebook" },
//       { src: "https://cruip-tutorials.vercel.app/logo-carousel/disney.svg", alt: "Disney" },
//       { src: "https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg", alt: "Airbnb" },
//       { src: "https://cruip-tutorials.vercel.app/logo-carousel/apple.svg", alt: "Apple" },
//       { src: "https://cruip-tutorials.vercel.app/logo-carousel/spark.svg", alt: "Spark" },
//       { src: "https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg", alt: "Samsung" },
//       { src: "https://cruip-tutorials.vercel.app/logo-carousel/quora.svg", alt: "Quora" },
//       { src: "https://cruip-tutorials.vercel.app/logo-carousel/sass.svg", alt: "Sass" },
//     ];
  
//     // Duplicate logos for seamless scroll
//     const repeated = [...logos, ...logos];
  
//     return (
//       <div className="relative font-inter antialiased bg-slate-900 min-h-screen flex flex-col justify-center overflow-hidden">
//         <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24 text-center">
//           <div className="w-full overflow-hidden">
//             <div className="flex animate-scroll whitespace-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
//               {repeated.map((logo, index) => (
//                 <div key={index} className="mx-8 flex-shrink-0">
//                   <img src={logo.src} alt={logo.alt} className="h-12 w-auto" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
  
//         <footer className="absolute left-6 right-6 md:left-12 md:right-auto bottom-4 md:bottom-8 text-center md:text-left">
//           <a
//             className="text-xs text-slate-500 hover:underline"
//             href="https://cruip.com"
//             target="_blank"
//             rel="noreferrer"
//           >
//             &copy; Cruip - Tailwind CSS templates
//           </a>
//         </footer>
//       </div>
//     );
//   }
  