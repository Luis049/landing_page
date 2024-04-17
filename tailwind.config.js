/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "close-menu": "url('assets/icon-close.svg')",
        "open-menu": "url('assets/icon-hamburger.svg')",
      },
    },
  },
  plugins: [],
};
