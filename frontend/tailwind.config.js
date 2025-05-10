/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      screens: {
        mobile: "480px", // For small devices
        laptop: "1280px", // Your laptop
        client: "1920px", // Client PC
      },
      scale: {
        65: "0.65",
        50: "0.50",
        100: "1.00",
      },
      inset: {
        45: "11.25rem",
        "-45": "-11.25rem",
        140: "35rem",
        120: "30rem",
        "-87": "-21.75rem",
        290: "72.5rem",
      },
    },
  },
  plugins: [],
};
