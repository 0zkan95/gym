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
        'primary-100': '#F5F3F4',
        'primary-300': '#E5E1E2',
        'primary-500': '#D90429',
        'secondary-400': '#F77F00',
        'secondary-500': '#F77F00',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
