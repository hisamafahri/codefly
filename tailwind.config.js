module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-200": "#1E1E1E",
        "primary-light": "#8849f4",
      },
    },
  },
  plugins: [require("daisyui")],
};
