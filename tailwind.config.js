/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC05',
          green: '#34A853',
        },
      },
      fontFamily: {
        // Add your GDG website fonts here
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // keep your existing fallback
      },
      animation: {
        'slide-left': 'slide-left 30s linear infinite',
        'slide-right': 'slide-right 35s linear infinite',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
