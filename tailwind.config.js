/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mars: {
          // Deep Martian Red - primary highlights, call-to-action buttons
          red: '#A23A21',
          // Rust Orange - secondary accents, hover effects
          orange: '#C65E26',
          // Dark Vermilion - headings, emphasized UI elements
          vermilion: '#89371C',
          // Shadow Brown - cards, section backgrounds
          brown: '#463024',
          // Space Black - main backgrounds, overall page
          black: '#0D1117',
          // Slate Gray - navigation bars, overlays
          gray: '#23272F',
          // Frost White - primary text and icons for contrast and readability
          white: '#EBECF0',
        },
      },
    },
  },
  plugins: [],
}