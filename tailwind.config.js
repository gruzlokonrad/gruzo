/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "brand-white": '#fdfdfd',
        "brand-red": '#eb3f3f',
        "brand-darkblue": '#272c5d',
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
