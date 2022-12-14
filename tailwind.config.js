/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#351330",
      secondary: "#424254",
      tercery: "#64908a",
      quaternary: "#e8caa4",
      quintary: "#cc2a41",
      white: "#FFFFFF",
      black: "#00000",
    },
    extend: {},
  },
  plugins: [],
};
