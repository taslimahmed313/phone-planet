/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  plugins: [require("flowbite/plugin")],
  theme: {
    screens : {
      "sm" : "320px", 
      "md" : "768px",
      "lg" : "1024px",
      "xl" : "1280px",
      "2xl" : "1536px"
    }
  },
};
