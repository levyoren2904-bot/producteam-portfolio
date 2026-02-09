'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerDelay: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
    },
  }),
};

const characterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
  once = true,
}: AnimatedTextProps) {
  const characters = text.split('');

  return (
    <motion.span
      className={cn('inline-block', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      custom={{ staggerDelay }}
      transition={{ delayChildren: delay }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={characterVariants}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
