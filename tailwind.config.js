/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#6962F4",
      },
      backgroundImage: {
        "purple-100":
          "linear-gradient(264.22deg, #6663F3 2.75%, #A04AF6 98.46%)",
        "purple-200":
          "linear-gradient(264.22deg, #9C4DF6 2.75%, #6766F3 94.47%)",
        "purple-300":
          "linear-gradient(96.4deg, #522B76 -1.2%, #522B76 -1.19%, #211C50 62.36%, #4336A0 107.76%)",
      },
    },
    fontFamily: {
      "bold-10px": ["SVN-GilroyBlackItalic.otf"],
    },
  },
  plugins: [],
};
