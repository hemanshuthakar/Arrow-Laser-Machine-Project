/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0B0F14', // primary dark
          800: '#111827', // secondary dark
          700: '#1F2933', // borders/dividers
        },
        primary: {
          DEFAULT: '#F59E0B', // laser amber
          glow: 'rgba(245, 158, 11, 0.5)',
        },
        secondary: {
          DEFAULT: '#38BDF8', // tech blue
        },
        text: {
          heading: '#FFFFFF',
          body: '#CBD5E1',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'laser-sweep': 'laserSweep 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        laserSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '50%, 100%': { transform: 'translateX(200%)' },
        }
      }
    },
  },
  plugins: [],
}
