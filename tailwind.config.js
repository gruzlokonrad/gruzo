/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "white-adomi": '#fdfdfd',
        "red-adomi": '#eb3f3f',
        "dark-adomi": '#272c5d',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },
  },
  plugins: [],
}
