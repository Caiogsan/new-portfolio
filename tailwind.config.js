/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'navbar' : 'Heebo, sans-serif'
      },
      backgroundImage: {
        "caio" : "url('/src/assets/personal.PNG')"
      }
    },
  },
  plugins: [],
}

