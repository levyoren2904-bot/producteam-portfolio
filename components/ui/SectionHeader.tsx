'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      {label && (
        <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-primary">
          {label}
        </span>
      )}
      <h2 className="font-display text-display-md">{title}</h2>
      {description && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-lg text-text-muted',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
