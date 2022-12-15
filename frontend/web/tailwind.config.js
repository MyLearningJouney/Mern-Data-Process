/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
