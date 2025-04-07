/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // garanta que está cobrindo onde tem conteúdo
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // define Montserrat como padrão pra font-sans
      },
    },
  },
  plugins: [],
};
