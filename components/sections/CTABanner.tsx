'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout';
import { Button } from '@/components/ui';

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export function CTABanner({
  title = 'READY TO BUILD SOMETHING CRITICAL?',
  description = "Let's discuss how we can help you design interfaces that matter.",
  primaryCTA = { label: 'Start a Project', href: '/contact' },
  secondaryCTA = { label: 'View Our Work', href: '/work' },
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-surface py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid-overlay opacity-20" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-center"
        >
          <h2 className="mx-auto max-w-3xl font-display text-display-md">
            {title.split(' ').map((word, i) =>
              word === 'CRITICAL?' ? (
                <span key={i} className="text-primary">
                  {word}{' '}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-text-muted">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={primaryCTA.href} size="lg">
              {primaryCTA.label}
            </Button>
            <Button href={secondaryCTA.href} variant="ghost" size="lg">
              {secondaryCTA.label}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
