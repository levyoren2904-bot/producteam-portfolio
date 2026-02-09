// Design Tokens - Core design system values
// These should stay in sync with tailwind.config.ts

export const colors = {
  background: '#0B0E11',
  surface: '#12161B',
  surfaceElevated: '#1A1F26',
  primary: '#EA3E3E',
  primaryGlow: 'rgba(234, 62, 62, 0.15)',
  primaryGlowIntense: 'rgba(234, 62, 62, 0.3)',
  text: '#FFFFFF',
  textMuted: '#8B9AAB',
  textSubtle: '#5A6778',
  border: '#2A3140',
  accent: '#3B82F6',
} as const;

export const typography = {
  displayXl: {
    fontSize: 'clamp(4rem, 12vw, 8rem)',
    lineHeight: '0.9',
    letterSpacing: '-0.02em',
    fontFamily: 'var(--font-bebas)',
    textTransform: 'uppercase' as const,
  },
  displayLg: {
    fontSize: 'clamp(3rem, 8vw, 5rem)',
    lineHeight: '0.95',
    letterSpacing: '-0.02em',
    fontFamily: 'var(--font-bebas)',
    textTransform: 'uppercase' as const,
  },
  displayMd: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    lineHeight: '1',
    letterSpacing: '-0.01em',
    fontFamily: 'var(--font-bebas)',
    textTransform: 'uppercase' as const,
  },
  headline: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    lineHeight: '1.1',
    letterSpacing: '0',
    fontFamily: 'var(--font-bebas)',
    textTransform: 'uppercase' as const,
  },
  body: {
    fontSize: '1rem',
    lineHeight: '1.6',
    fontFamily: 'var(--font-inter)',
  },
  bodyLarge: {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    fontFamily: 'var(--font-inter)',
  },
  caption: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    fontFamily: 'var(--font-inter)',
    fontWeight: '500',
  },
  mono: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    fontFamily: 'var(--font-jetbrains)',
  },
} as const;

export const motion = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
    slower: 800,
  },
  easing: {
    default: [0.16, 1, 0.3, 1], // expo-out
    smooth: [0.4, 0, 0.2, 1],
    bounce: [0.34, 1.56, 0.64, 1],
  },
} as const;

export const spacing = {
  section: {
    sm: '4rem',
    md: '6rem',
    lg: '8rem',
    xl: '10rem',
  },
  container: {
    padding: '1.5rem',
    maxWidth: '1400px',
  },
} as const;

export const radius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
} as const;

// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: motion.easing.default },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: motion.easing.default },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: motion.easing.default },
};
