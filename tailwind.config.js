/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#172554',
          950: '#0b1736',
        },
        action: {
          500: '#16a34a',
          600: '#15803d',
          700: '#166534',
        },
        warm: '#f97316',
      },
      boxShadow: {
        soft: '0 18px 55px rgba(15, 23, 42, 0.12)',
        card: '0 18px 45px rgba(15, 23, 42, 0.10)',
        hero: '0 30px 90px rgba(2, 6, 23, 0.38)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms ease-out both',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
