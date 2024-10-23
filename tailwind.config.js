/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React files
    "./node_modules/flowbite/**/*.js",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#74823D", // Custom green color
        yellow: "#F2D429", // Custom yellow color
        skin: "#F7EBDF", // Custom skin color
      },
    },
    screens: {
      sm: '360px', // Adjusted to a smaller size
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require("flowbite/plugin")],
});
