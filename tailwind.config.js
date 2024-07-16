/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '0',

      'sm': '576px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
     },
    extend: {
      fontFamily: {"Inter":"Inter"},
      textColor: {
        "gray": "#777777",
        "purple": "#4338CA",
        "gray2": "#6B7280",
        "purple2": "#3730A3",
        "purple3": "#7B61FF",
        "black": "#1F2937",
        "green": "#00AB6B",
        "blue": "#0077B5",
        "red": "#AF0C48",
        "t-white": "#D9D9D9",
        "t-lilac": "#B7AAFF",
        "ş": "#8F88FF",
        "h1": "#AEBCCF",
        "btn-t": "#E1E1FF", 
        "r-black": "#000000", 
        "pr": "#CFCBFF",
      },
      colors : {
        "yellow": "#FFE86E",
        "btn-purple": "#4731D3",
        "black1": "#3A3A3A",
        "pink": "#E92577",
        "lilac": "#BAB2E7",
        "borderC": "#3730A3", 
        "light-purple": "#EEEBFF", 
        "footer": "#F9F9F9",
        "d-body": "#252128",
        "btn-lilac": "#E1E1FF",
        "btn-bcg": "#383838",
        "btn-ş": "#8F88FF",
        "foo": "#141414",
      }
    },
  },
  plugins: [],
}