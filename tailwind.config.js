module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#06A6FF",
      seconday: "#FCF300",
      red: "#FF0000",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
