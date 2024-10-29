/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo" : "#393939",
        "opcao": "#0D131C"
      }

    },
  },
  plugins: [],
}

