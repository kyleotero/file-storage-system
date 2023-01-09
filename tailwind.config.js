/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#131313",
        lightbg: "#FFF8DC",
        greenaf: "#669966",
        charcoal: "#373737",
        medgrey: "#999999",
        lightgrey: "#CCCCCC",
        lightblue: "#ADD8E6",
        mint: "#CCFFCC",
        exgrey: "#e8e8e8",
      },
      spacing: {
        "1/3": "33%",
        "1/2": "50%",
      },
      fontFamily: {
        roboto: "roboto",
      },
      animation: {
        //textbox arrow flip
        flip: "halfspin 0.3s forwards",
        //main screen elements fade in
        fadedown: "fadedown 1s",
        //down arrow bouncing
        slowbounce: "slowbounce 3s infinite",
      },
      keyframes: {
        //textbox arrow flip
        fadedown: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "100%", transform: "translateY(0)" },
        },
        //main screen elements fade in
        slowbounce: {
          "0%, 70%, 100%": { transform: "translateY(-25%)" },
          "35%": { transform: "translateY(0%)" },
        },
        //down arrow bouncing
        halfspin: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(0.5turn)" },
        },
      },
    },
  },
  plugins: [],
};
