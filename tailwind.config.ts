import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0E11',
        surface: '#12161B',
        'surface-elevated': '#1A1F26',
        primary: '#EA3E3E',
        'primary-glow': 'rgba(234, 62, 62, 0.15)',
        'primary-glow-intense': 'rgba(234, 62, 62, 0.3)',
        text: '#FFFFFF',
        'text-muted': '#8B9AAB',
        'text-subtle': '#5A6778',
        border: '#2A3140',
        accent: '#3B82F6',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3rem, 8vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'headline': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.1', letterSpacing: '0' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, rgba(42, 49, 64, 0.3) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(42, 49, 64, 0.3) 1px, transparent 1px)`,
        'radial-glow': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'noise': "url('/noise.svg')",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'glow': '0 0 60px rgba(234, 62, 62, 0.3)',
        'glow-lg': '0 0 120px rgba(234, 62, 62, 0.4)',
        'inner-glow': 'inset 0 0 60px rgba(234, 62, 62, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
