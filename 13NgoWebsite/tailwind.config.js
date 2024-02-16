/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'rgb(18, 15, 8)',
        'background': 'rgb(249, 246, 241)',
        'primary': 'rgb(29, 28, 27)',
        'secondary': 'rgb(245, 245, 245)',
        'accent': 'rgb(235, 225, 30)',
       },       
    },
  },
  plugins: [],
}

