/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./app/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        espresso: '#3C2A21',
        mocha: '#6F4E37',
        cappuccino: '#A0785A',
        latte: '#C4A484',
        cream: '#F9F5F0', // Lighter, more elegant cream
        vanilla: '#FFFAF5', // Softer vanilla
        amber: '#D97706',
        caramel: '#EAB308',
        honey: '#F59E0B',
        cinnamon: '#D68D45',
        gold: '#B8860B',
        'warm-gray': {
          100: '#F7F5F2',
          200: '#EBE7E0',
          300: '#D6D0C5',
          400: '#B8B0A0',
          500: '#9A907F',
          600: '#7A7060',
          700: '#5C5244',
          800: '#433830',
          900: '#2E2620',
        },
        primary: {
          DEFAULT: '#6F4E37',
          light: '#8D6E5A',
          dark: '#543A2F',
        },
        secondary: '#D97706',
        accent: '#E69F5C', // More vibrant accent
        muted: '#B8B0A0',
      },
    },
  },
  plugins: [],
}

