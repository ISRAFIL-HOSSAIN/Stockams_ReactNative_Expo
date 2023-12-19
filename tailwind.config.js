/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", 
  "./app/(tabs)/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",

],
  theme: {
    extend: {
      colors: {
        primary: "#DCE102", // Replace with your primary color
        black: "#2D2D2A",
        secondary: "#FDB3CA",
        grey: "#E7E9E2",
        tertiary: "#B3FAFF",
        gray2: "#E7E9E2",
        smokewhite: "#F5F5F5", // Replace with your secondary color
      },
    },
  },
  plugins: [],
};
