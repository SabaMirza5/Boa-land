

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text_color: "#171717",
        main_color: "#3DB5BD",
        main_color_bg: "#4AC4CC",
        faq: "#666666",
      },
      screens: {
        pc: "1920px", // Define your custom screen size here
      },
    },
  },
  plugins: [],
};
