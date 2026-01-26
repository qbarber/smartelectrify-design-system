/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669',
          50: '#f0fdf4',
          100: '#d1fae5',
          600: '#059669',
          700: '#047857',
        },
        background: '#fafaf9',
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          900: '#1c1917',
        },
      },
      fontSize: {
        base: ['16px', { lineHeight: '1.625' }],
      },
    },
  },
  plugins: [],
}