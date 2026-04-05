/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ic-green': '#0AAD0A',
        'ic-green-light': '#E8F9E8',
        'ic-green-dark': '#087808',
        'ic-gray': '#F6F6F6',
        'ic-gray-mid': '#D4D4D4',
        'ic-gray-text': '#8B8B8B',
        'ic-text': '#1A1A1A',
        'ic-border': '#EBEBEB',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 4px rgba(0,0,0,0.08)',
        'card-md': '0 2px 12px rgba(0,0,0,0.10)',
        'bottom-bar': '0 -2px 16px rgba(0,0,0,0.08)',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-30%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
        'banner-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '12%': { transform: 'translateY(0)', opacity: '1' },
          '78%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        'check-pop': {
          '0%': { opacity: '0', transform: 'scale(0.4)' },
          '70%': { transform: 'scale(1.15)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'spin-cw': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'sheet-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.34s cubic-bezier(0.25,0.46,0.45,0.94) both',
        'slide-out': 'slide-out 0.34s cubic-bezier(0.25,0.46,0.45,0.94) both',
        'pulse-dot': 'pulse-dot 1.5s ease-in-out infinite',
        'banner-down': 'banner-down 4s ease forwards',
        'check-pop': 'check-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s both',
        'fade-up': 'fade-up 0.38s ease both',
        'fade-out': 'fade-out 0.3s ease forwards',
        'spin-cw': 'spin-cw 0.85s linear infinite',
        'sheet-up': 'sheet-up 0.36s cubic-bezier(0.25,0.46,0.45,0.94) both',
      },
    },
  },
  plugins: [],
}
