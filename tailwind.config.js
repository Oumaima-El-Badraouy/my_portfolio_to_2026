/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#141414',
        surfaceLight: '#1c1c1c',
        text: '#f0f0f0',
        textMuted: '#888888',
        textLight: '#cccccc',
        accent: '#d4af37',
        accentSoft: '#c9a227',
        border: 'rgba(255, 255, 255, 0.08)',
        borderLight: 'rgba(255, 255, 255, 0.12)',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Italiana', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title': ['1.75rem', { lineHeight: '1.3' }],
        'body': ['1.125rem', { lineHeight: '1.7' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': 'clamp(80px, 15vh, 160px)',
        'container': 'clamp(24px, 5vw, 80px)',
        'gap': 'clamp(24px, 4vw, 48px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
