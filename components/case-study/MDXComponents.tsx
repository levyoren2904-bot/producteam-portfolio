'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ImageGallery } from './ImageGallery';
import { CaseStats } from './CaseStats';

// Custom components for MDX rendering
export const mdxComponents = {
  // Headings
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 font-display text-display-md first:mt-0"
      {...props}
    >
      {children}
    </motion.h1>
  ),

  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 font-display text-headline text-primary"
      {...props}
    >
      {children}
    </motion.h2>
  ),

  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-8 font-display text-xl"
      {...props}
    >
      {children}
    </motion.h3>
  ),

  // Paragraphs
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mt-4 text-lg leading-relaxed text-text-muted"
      {...props}
    >
      {children}
    </motion.p>
  ),

  // Lists
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-4 space-y-2 text-text-muted" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-text-muted" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="flex items-start gap-3" {...props}>
      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
      <span>{children}</span>
    </li>
  ),

  // Blockquote
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-8 border-l-2 border-primary pl-6 text-xl italic text-text"
      {...props}
    >
      {children}
    </motion.blockquote>
  ),

  // Code
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-primary"
      {...props}
    >
      {children}
    </code>
  ),

  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm"
      {...props}
    >
      {children}
    </pre>
  ),

  // Links
  a: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
      {...props}
    >
      {children}
    </a>
  ),

  // Horizontal rule
  hr: () => <hr className="my-12 border-border" />,

  // Image with custom styling
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-8"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-surface-elevated">
        {src ? (
          <Image
            src={src}
            alt={alt || ''}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-24 w-40 rounded border border-border/50 bg-background">
              <div className="h-full w-full bg-grid-overlay opacity-50" />
            </div>
          </div>
        )}
      </div>
      {alt && (
        <figcaption className="mt-3 text-center text-sm text-text-subtle">
          {alt}
        </figcaption>
      )}
    </motion.figure>
  ),

  // Custom components
  ImageGallery,
  CaseStats,

  // Callout/Note component
  Callout: ({
    children,
    type = 'info',
  }: {
    children: React.ReactNode;
    type?: 'info' | 'warning' | 'success';
  }) => {
    const styles = {
      info: 'border-accent/30 bg-accent/5',
      warning: 'border-yellow-500/30 bg-yellow-500/5',
      success: 'border-green-500/30 bg-green-500/5',
    };

    return (
      <div className={cn('my-6 rounded-lg border p-4', styles[type])}>
        {children}
      </div>
    );
  },

  // Two-column layout
  TwoColumn: ({
    children,
    reverse = false,
  }: {
    children: React.ReactNode;
    reverse?: boolean;
  }) => (
    <div
      className={cn(
        'my-8 grid gap-8 md:grid-cols-2',
        reverse && 'md:[&>*:first-child]:order-2'
      )}
    >
      {children}
    </div>
  ),

  // Process step component
  ProcessStep: ({
    number,
    title,
    children,
  }: {
    number: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-6 flex gap-6"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10 font-display text-lg text-primary">
        {number}
      </div>
      <div>
        <h4 className="font-display text-lg">{title}</h4>
        <div className="mt-2 text-text-muted">{children}</div>
      </div>
    </motion.div>
  ),
};
