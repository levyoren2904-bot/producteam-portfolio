'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout';
import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { CaseStudyFrontmatter } from '@/lib/mdx';

interface CaseHeroProps {
  frontmatter: CaseStudyFrontmatter;
}

export function CaseHero({ frontmatter }: CaseHeroProps) {
  const {
    title,
    client,
    industry,
    year,
    duration,
    role,
    thumbnail,
    summary,
  } = frontmatter;

  return (
    <section className="relative overflow-hidden bg-background pt-32 md:pt-40">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 bg-grid-overlay opacity-20" />
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <Container>
        <div className="pb-12 md:pb-16">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <a
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors hover:text-primary"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to Work
            </a>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <Badge variant="primary">{industry}</Badge>
            <Badge>{year}</Badge>
            <Badge variant="muted">{duration}</Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl font-display text-display-lg"
          >
            {title}
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-2xl text-xl text-text-muted"
          >
            {summary}
          </motion.p>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <div className="mb-1 font-mono text-xs uppercase tracking-wider text-text-subtle">
                Client
              </div>
              <div className="text-text">{client}</div>
            </div>
            <div>
              <div className="mb-1 font-mono text-xs uppercase tracking-wider text-text-subtle">
                Industry
              </div>
              <div className="text-text">{industry}</div>
            </div>
            <div>
              <div className="mb-1 font-mono text-xs uppercase tracking-wider text-text-subtle">
                Duration
              </div>
              <div className="text-text">{duration}</div>
            </div>
            <div>
              <div className="mb-1 font-mono text-xs uppercase tracking-wider text-text-subtle">
                Role
              </div>
              <div className="flex flex-wrap gap-2">
                {role.map((r) => (
                  <span key={r} className="text-text">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative"
      >
        <Container size="wide">
          <div className={cn(
            "relative overflow-hidden rounded-t-xl border border-b-0 border-border bg-surface-elevated",
            frontmatter.slug === 'israels-public-diplomacy-website' 
              ? "aspect-hero-tall" 
              : "aspect-[21/9]"
          )}>
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={title}
                fill
                className="object-cover object-top"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="h-48 w-80 rounded border border-border/50 bg-background">
                    <div className="h-full w-full bg-grid-overlay opacity-50" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded border border-primary/30 bg-primary/10" />
                </div>
              </div>
            )}
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
