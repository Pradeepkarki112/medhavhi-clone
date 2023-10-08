/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#45B8EA",
        secondaryColor: "#545454",
        backgroundColor: "#faf9f6",
        greyColor: "#7d7d7d",
        greyblueColor: "#E2E8F0",
        blueColor: "#E2EFF0",
        blackColor: "#000000",
        whiteColor: "#ffffff",
        creamColor: "#F4F4F5",
      },

      screens: {
        // sm: "640px",
        // md: "768px",
        // lg: "1024px",
        // xl: "1280px",
        "2xl": "1280px",
        "3xl": "1820px",
      },

      fontSize: {
        smallSize: "16px",
        mediumSize: "24px",
        largeSize: "40px",
      },

      letterSpacing: {
        wide: ".025em",
        wider: ".05em",
        tight: "-.025em",
        tighter: "-.05em",
      },
      lineHeight: {
        short: "18px",
        tall: "22px",
        taller: "48px",
      },
    },
  },
  plugins: [],
};
