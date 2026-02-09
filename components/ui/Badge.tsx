'use client';

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'muted';
  size?: 'sm' | 'md';
  className?: string;
}

const variants = {
  default: 'bg-surface-elevated text-text-muted border-border',
  primary: 'bg-primary/10 text-primary border-primary/20',
  muted: 'bg-surface text-text-subtle border-transparent',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border font-mono uppercase tracking-wider',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
