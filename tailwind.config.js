/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html","./HTML/**/*.html", "./JS/**/*.js"],
  theme: {
    extend: {

      screens: {
        // Define a max-width breakpoint
        'max-md': { max: '768px' }, 
        'low-md': {max: '500px'},
        '300-md': {max: '300px'},
        '1300-md': {max: '1300px'},
        '1100-md': {max: '1100px'}, 
        '1000-md': {max: '1000px'}, 
        'h-md': {'raw' : '(max-height:700px)'},
        'h-ld': {'raw' : '(max-height:500px)'}
      },
    },
  },
  plugins: [],
}

