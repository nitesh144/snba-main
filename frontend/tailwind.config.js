/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        float:{
          '0%': {transform: 'translateY(0) rotate(45deg)'},
          '100%':{transform: 'translateY(-20px) rotate(45deg)'},
        },
          bounce: {
        '0%, 80%, 100%': { 
          transform: 'scale(0)',
        },
        '40%': { 
          transform: 'scale(1.0)',
        },},},
      animation:{
        float: 'float 50s infinite ease-in-out alternate'
      },},},
  plugins: [],
}