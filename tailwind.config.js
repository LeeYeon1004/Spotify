/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { transform: ["hover", "focus"] },
    screens: {
      w1300: "1300px",

      w1505: "1505px",

      w1709: "1709px",

      w1912: "1912px",
    },
  },
  plugins: [],
};
