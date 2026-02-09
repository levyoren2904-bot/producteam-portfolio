'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { CaseStudyFrontmatter } from '@/lib/mdx';

interface CaseCardProps {
  case_: CaseStudyFrontmatter;
  index?: number;
  featured?: boolean;
}

export function CaseCard({ case_, index = 0, featured = false }: CaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/work/${case_.slug}`}
        className={cn(
          'group block overflow-hidden rounded-lg border border-border bg-surface transition-all duration-500',
          'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
          featured && 'lg:flex lg:items-stretch'
        )}
      >
        {/* Image */}
        <div
          className={cn(
            'relative overflow-hidden bg-surface-elevated',
            case_.slug === 'israels-public-diplomacy-website'
              ? 'aspect-case-study-tall'
              : 'aspect-case-study',
            featured && 'lg:w-3/5'
          )}
        >
          {case_.thumbnail ? (
            <Image
              src={case_.thumbnail}
              alt={case_.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Placeholder visual */}
                <div className="h-32 w-48 rounded border border-border/50 bg-background">
                  <div className="h-full w-full bg-grid-overlay opacity-50" />
                </div>
                <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded border border-primary/30 bg-primary/10" />
              </div>
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* View Project indicator */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <span className="font-mono text-xs uppercase tracking-wider text-text">
              View Project
            </span>
            <svg
              className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div
          className={cn(
            'p-6',
            featured && 'lg:flex lg:w-2/5 lg:flex-col lg:justify-center lg:p-10'
          )}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="primary">{case_.industry}</Badge>
            <Badge>{case_.year}</Badge>
          </div>

          <h3
            className={cn(
              'font-display transition-colors group-hover:text-primary',
              featured ? 'text-2xl lg:text-3xl' : 'text-xl'
            )}
          >
            {case_.title}
          </h3>

          <p
            className={cn(
              'mt-3 text-text-muted',
              featured ? 'text-base' : 'text-sm',
              'line-clamp-3'
            )}
          >
            {case_.summary}
          </p>

          {/* Impact metrics */}
          {featured && case_.impact && case_.impact.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-6">
              {case_.impact.slice(0, 2).map((metric, i) => (
                <div key={i} className="text-sm">
                  <span className="text-primary">✓</span>{' '}
                  <span className="text-text-muted">{metric}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
