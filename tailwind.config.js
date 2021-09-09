module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#06A6FF",
      primaryHover: "#039ff3",
      secondary: "#FCF300",
      secondaryHover: "#fff706",
      red: "#FF0000",
      redHover: "#e00202",
      white: "#ffffff",
      transparent: "transparent",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
