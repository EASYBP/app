/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      
    },
  },
  plugins: [
     require('tailwind-scrollbar'),
  ],
  variants: {
    // ...
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
  },
};
