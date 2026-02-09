'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/layout';
import { Button, AnimatedText } from '@/components/ui';
import { cn } from '@/lib/utils';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-overlay opacity-30" />

      {/* Animated Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={cn(
            'h-[800px] w-[800px] rounded-full',
            'bg-radial-glow from-primary/20 via-primary/5 to-transparent',
            'animate-glow-pulse blur-3xl'
          )}
        />
      </motion.div>

      {/* Secondary Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="pointer-events-none absolute -right-40 top-20"
      >
        <div className="h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
      </motion.div>

      {/* Floating Accent Elements */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="pointer-events-none absolute left-[10%] top-[30%]"
      >
        <div className="h-px w-32 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="pointer-events-none absolute bottom-[25%] right-[15%]"
      >
        <div className="h-32 w-px bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="pointer-events-none absolute right-[25%] top-[20%]"
      >
        <div className="h-2 w-2 rounded-full bg-primary/60" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
        className="pointer-events-none absolute bottom-[35%] left-[20%]"
      >
        <div className="h-3 w-3 rotate-45 border border-primary/40" />
      </motion.div>

      {/* Noise Overlay */}
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      {/* Content */}
      <motion.div style={{ opacity, scale, y }} className="relative z-10 w-full">
        <Container>
          <div className="grid items-center gap-12 py-28 md:py-36 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.3fr)]">
            {/* Left: Copy */}
            <div className="flex flex-col items-start">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
                  <span className="h-px w-8 bg-primary" />
                  producTeam · Product Design for Critical Systems
                </span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="max-w-5xl font-display text-display-xl">
                <AnimatedText text="DESIGNING DIGITAL" delay={0.3} />
                <br />
                <span className="text-primary">
                  <AnimatedText text="CRITICAL SYSTEMS" delay={0.5} />
                </span>
              </h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl"
              >
                producTeam is a high-performance product design studio that
                combines UX, UI, and systems thinking to turn complex,
                high-stakes environments into clear, scalable digital systems
                for defense, infrastructure, and enterprise organizations.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button href="/work" size="lg">
                  View Our Work
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  Start a Project
                </Button>
              </motion.div>

              {/* Stats/Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-16 flex flex-wrap gap-12 border-t border-border pt-8"
              >
                <div>
                  <div className="font-display text-3xl text-text">5+</div>
                  <div className="mt-1 font-mono text-xs uppercase tracking-wider text-text-subtle">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl text-text">50+</div>
                  <div className="mt-1 font-mono text-xs uppercase tracking-wider text-text-subtle">
                    Critical Systems
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl text-text">12</div>
                  <div className="mt-1 font-mono text-xs uppercase tracking-wider text-text-subtle">
                    Countries Deployed
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Studio reel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative hidden justify-end md:flex"
            >
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="group relative aspect-video w-full max-w-xl lg:max-w-2xl overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-glow transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow-lg"
              >
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/studio-reel.webm" type="video/webm" />
                  <source src="/videos/studio-reel.mp4" type="video/mp4" />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-text-subtle">
                  Studio Reel · producTeam
                </div>

                {/* Hover play icon */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-text/40 bg-background/80">
                    <span className="ml-0.5 inline-block border-y-8 border-l-12 border-y-transparent border-l-text" />
                  </div>
                </div>
              </button>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Video lightbox */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black">
                <video
                  className="h-full w-full object-contain"
                  autoPlay
                  controls
                  muted
                >
                  <source src="/videos/studio-reel.webm" type="video/webm" />
                  <source src="/videos/studio-reel.mp4" type="video/mp4" />
                </video>
              </div>

              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-text-subtle transition-colors hover:border-primary hover:text-primary"
                aria-label="Close video"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-subtle">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-text-subtle to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
