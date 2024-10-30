/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo" : "#393939",
        "opcao": "#0D131C",
        "correct" :"#A5FF9D",
        "wrong" : "#FFA0A0",
        "cronometro-fundo": "#FBFBFB"
      }

    },
  },
  plugins: [],
}

