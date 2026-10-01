/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#800000',
          dark: '#5B0000',
          rich: '#8B1E1E',
          bright: '#A02020',
          light: '#B91C1C',
          soft: '#FFF5F5',
        },
        amberGold: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        dark: {
          DEFAULT: '#1E293B',
          deep: '#0F172A',
        },
        pearl: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-maroon': '0 10px 30px -10px rgba(128, 0, 0, 0.4)',
        'glow-amber': '0 10px 30px -10px rgba(245, 158, 11, 0.4)',
        'bus-shadow': '0 20px 50px rgba(15, 23, 42, 0.25)',
      },
      backgroundImage: {
        'gradient-maroon-gold': 'linear-gradient(135deg, #800000 0%, #8B1E1E 50%, #F59E0B 100%)',
        'gradient-maroon-dark': 'linear-gradient(135deg, #5B0000 0%, #800000 100%)',
      },
      animation: {
        'bus-drive': 'busDrive 4s ease-in-out infinite',
        'road-lines': 'roadLines 0.8s linear infinite',
        'wheel-spin': 'wheelSpin 0.6s linear infinite',
        'float-subtle': 'floatSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        busDrive: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(0.5deg)' },
        },
        roadLines: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100px)' },
        },
        wheelSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        floatSubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
