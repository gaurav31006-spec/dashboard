/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        instagram: {
          blue: '#0095F6',
          'blue-hover': '#1877F2',
          red: '#ED4956',
          pink: '#E1306C',
          purple: '#833AB4',
          orange: '#F77737',
          yellow: '#FCAF45',
          black: '#000000',
          dark: '#121212',
          card: '#1C1C1E',
          'card-hover': '#262626',
          border: '#262626',
          'border-light': '#DBDBDB',
          'text-secondary': '#A8A8A8',
          'bg-light': '#FAFAFA'
        }
      },
      backgroundImage: {
        'ig-gradient': 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        'ig-gradient-subtle': 'linear-gradient(135deg, rgba(131, 58, 180, 0.15) 0%, rgba(225, 48, 108, 0.15) 50%, rgba(247, 119, 55, 0.15) 100%)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
