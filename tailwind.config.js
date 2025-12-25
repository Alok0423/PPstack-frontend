/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0A1B64", // Deep Blue
          blue: "#0D47A1",
          accent: "#F5C400", // Neon Yellow
          slate: "#2C3E50",
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A1B64 0%, #0D47A1 100%)',
        'pink-gradient': 'linear-gradient(90deg, #FF6F91 0%, #FF3CAC 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure you import Inter in index.css
      }
    },
  },
  plugins: [],
}