/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Landing-Page/**/*.html",
    "./CMS/**/*.{html,js}",
    "./pages/**/*.html",
    "./*.html",
    "./assets/Javascript/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        primaryDark: '#1e40af',
        accent: '#F59E0B',
        bg: '#F8FAFC',
        heading: '#0F172A',
        body: '#475569',
        surface: '#EFF6FF',
        brand: {
          primary: '#00A3FF',
          secondary: '#00D2FC',
          accent: '#FF007A',
        },
        dark: {
          bg: '#1A1A1E',
          surface: '#2D2D34',
          surfaceHover: '#373740',
          border: '#3A3A44',
          text: '#F8F9FA',
          muted: '#9E9EA8',
        },
        light: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          surfaceHover: '#F1F5F9',
          border: '#E2E8F0',
          text: '#1A1A1E',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}
