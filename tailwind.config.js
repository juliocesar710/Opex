import lineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#fdf3d8",
        ink: "#3e2c1c",
        pirateRed: "#a12c2f",
        pirateGold: "#af895c",
        oldPaper: "#f3e5ab",
      },
      fontFamily: {
        wanted: ['"IM Fell English SC"', "serif"],
      },
      boxShadow: {
        wanted:
          "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "paper-texture":
          "url('https://www.transparenttextures.com/patterns/old-paper.png')",
        "rough-texture":
          "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
      },
    },
  },
  plugins: [lineClamp],
};
