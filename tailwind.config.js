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
        blackColor: "#000000",
        whiteColor: "#ffffff",
        creamColor: "#F4F4F5",
      },

      screens: {
        sm: "640px",
        md: "768px",
        mmd: "900px",
        lg: "1024px",
        xl: "1280x",
        "2xl": "1536px",
      },

      fontSize: {
        smallSize: "16px",
        mediumSize: "24px",
        largeSize: "40px",
      },

      letterSpacing: {
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".075em",
        tight: "-.025em",
        tighter: "-.05em",
        tightest: "-.075em",
      },
      lineHeight: {
        taller: "48px",
        tall: "22px",
        short: "18px",
      },
    },
  },
  plugins: [],
};
