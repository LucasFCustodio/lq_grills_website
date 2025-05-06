/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          display: ['Playfair Display', 'serif'],
          body: ['Raleway', 'sans-serif'],
        },
        colors: {
          primary: {
            DEFAULT: '#B71C1C',
            light: '#D32F2F',
            dark: '#8B0000',
          },
          secondary: {
            DEFAULT: '#5D4037',
            light: '#795548',
            dark: '#3E2723',
          },
          accent: {
            DEFAULT: '#FF9800',
            light: '#FFA726',
            dark: '#F57C00',
          },
          success: {
            DEFAULT: '#2E7D32',
            light: '#4CAF50',
            dark: '#1B5E20',
          },
          warning: {
            DEFAULT: '#F57F17',
            light: '#FFEB3B',
            dark: '#F57F17',
          },
          error: {
            DEFAULT: '#C62828',
            light: '#EF5350',
            dark: '#B71C1C',
          },
        },
        backgroundImage: {
          'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/1105325/bbq-meet-eating-diner-1105325.jpeg')",
          'texture': "url('https://www.transparenttextures.com/patterns/wood-pattern.png')"
        },
      },
    },
    plugins: [],
  };