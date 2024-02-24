/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'white': "#ffffffff",
        'softwhite': "#f2f5f9",
        'custom-darkblue': "#111729",
        'softgray': "#677489",
      },
    },
  },
  plugins: [],
};
