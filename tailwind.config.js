/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#45B8EA",
      },

      screens: {
        // sm: "640px",
        "2xl": "1280px",
      },

      fontSize: {
        normalSize: "16px",
        mediumSize: "24px",
        largeSize: "40px",
      },

      letterSpacing: {
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
      },
    },
  },
  plugins: [],
};
