/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/UI/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.5s infinite",
        waves: "waves 0.8s infinite",
      },
      colors: {
        primary: "#5d5386",
        secondary: "#e4e8f0",
        success: "#5cb85c",
        info: "#5bc0de",
        warning: "#f0ad4e",
        danger: "#fe195e",
        martinique: "#2d2b4c",
        shark: "#212529",
        tomato: "#ea5844",
        aquamarine: "#41c7af",
        lavender: "#ebe8ff",
        firebrick: "#c9302c",
        gray: "#8b8b8b",
        orange: "#e7941e",
        purple: "#730062",
        "neon-carrot": "#ec971f",
        "slate-blue": "#6859ea",
        "dark-slate-blue": "#1b183e",
        "midnight-blue": "#110e33",
        "dark-slate-gray": "#2c304d",
        "light-green": "54e38e",
        "forest-green": "#449d44",
        "sky-blue": "#6acbe0",
        "deep-sky-blue": "#31b0d5",
        "violet-red": "#bc0056",
        "dim-gray": "#5a5a5a",
        "light-gray": "#f7f7f7",
        "blue-violet": "#614bff",
        "hot-pink": "#e23f83",
        "light-purple": "#dbd8e4",
      },
      keyframes: {
        waves: {
          "0%": { transform: "scale(1,1)", opacity: 1 },
          "100%": { transform: "scale(1.5,1.5)", opacity: 0 },
        },
        wiggle: {
          "25%": { transform: "rotate(180deg) translateY(.25rem) " },
          "75%": { transform: "rotate(180deg) translateY(-.25rem)" },
        },
      },
      screens: {
        "sm-mobile": "280px",
        mobile: "360px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
