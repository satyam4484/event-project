/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f6f6f4',
          100: '#e9e8e3',
          200: '#d3d1c8',
          300: '#b4b1a3',
          400: '#928e7c',
          500: '#7a7666',
          600: '#62604f',
          700: '#4f4d40',
          800: '#3b3a30',
          850: '#322f26',
          900: '#28271f',
          950: '#1a1914',
          975: '#121110',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5ecd0',
          200: '#ead79c',
          300: '#ddbe63',
          400: '#d4a73c',
          500: '#c08f28',
          600: '#a67020',
          700: '#85541d',
          800: '#6e441f',
          900: '#5d391d',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,167,60,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212,167,60,0.4)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
