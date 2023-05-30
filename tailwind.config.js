/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        'navy-blue': '#373641',
        'orange': '#F9A23B',
        'grey': '#757575',
        'light-green': '#B0FFBD'
      },
    },
  },
  plugins: [],
}
