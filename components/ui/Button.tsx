'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
}

const variants = {
  primary: [
    'bg-primary text-text border-transparent',
    'hover:bg-primary/90',
    'focus-visible:ring-primary/50',
    'shadow-glow hover:shadow-glow-lg',
  ].join(' '),
  secondary: [
    'bg-surface-elevated text-text border-border',
    'hover:bg-surface-elevated/80 hover:border-text-subtle',
    'focus-visible:ring-text-subtle/50',
  ].join(' '),
  ghost: [
    'bg-transparent text-text-muted border-border',
    'hover:text-text hover:border-text-subtle',
    'focus-visible:ring-text-subtle/50',
  ].join(' '),
};

const sizes = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
};

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
  external = false,
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2',
    'font-medium uppercase tracking-wider',
    'border rounded',
    'transition-all duration-300 ease-expo-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className
  );

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    transition: { duration: 0.2 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <Link href={href} className={baseClasses}>
        <motion.span
          className="inline-flex items-center justify-center gap-2"
          {...motionProps}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
