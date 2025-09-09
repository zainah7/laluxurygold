/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        serif: ['var(--font-playfair-display)'],
        inter: ['var(--font-inter)'],
        moneta: ['Monoton', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        'primary-dark': '#0F382E',
      },
    },
  },
  plugins: [],
};