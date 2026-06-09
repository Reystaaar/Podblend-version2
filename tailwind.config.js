/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Space Grotesk', 'monospace'],
        mono: ['Space Grotesk', 'monospace'],
      },
      colors: {
        ink: '#0A0A0B',
        inksoft: '#111114',
        paper: '#FFFFFF',
        papersoft: '#FAFAFA',
        accent: '#131644',
        brand: {
          dark: '#050505',
          card: '#121212',
          deep: '#131644',
          accent: '#3b82f6',
        },
      },
      maxWidth: { container: '1280px' },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 4rem))' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
