module.exports = {
  content: [
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['"Inter"', 'sans-serif'],
      },
      colors:{
        myBlue:{
          100:"hsl(240, 38%, 20%)",
          200:"hsl(240, 18%, 77%)",
        },
      },
    },
  },
  plugins: [],
}
