/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#2E3159",
      secondary: "#273240",
      tercery: "#49E1F2",
      quaternary: "#F25430",
      quintary: "#0D0D0D",
      white: "#FFFFFF",
      black: "#00000",
    },
    extend: {},
  },
  plugins: [],
};
