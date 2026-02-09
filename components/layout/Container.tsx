'use client';

import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({
  children,
  className,
  as: Component = 'div',
  size = 'default',
}: ContainerProps) {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-[1400px]',
    wide: 'max-w-[1600px]',
  };

  return (
    <Component
      className={cn(
        'mx-auto w-full px-6 md:px-8 lg:px-12',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
