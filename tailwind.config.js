/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}

