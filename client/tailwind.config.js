/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        oswald : ['Oswald']
      },
      fill : {
        raise : "#5DC7C2",
        drop : '#DA5757'
      },
      textColor : {
        raise : "#5DC7C2",
        drop : '#DA5757'
      }
     
    },
  },
  plugins: [],
}