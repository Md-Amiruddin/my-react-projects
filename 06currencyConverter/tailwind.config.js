/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'rgb(118, 118, 118)',
        'background': 'rgb(1, 20, 17)',
        'primary': 'rgb(49, 52, 56)',
        'secondary': 'rgb(227, 131, 213)',
        'accent': 'rgb(220, 101, 174)',
       },
       backgroundImage: {
        'win' : "url('https://wallpaperaccess.com/full/837257.png')"
       }
    },
  },
  plugins: [],
}

