'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout';
import { AnimatedText } from '@/components/ui';

export function StudioHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 md:pt-40">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 bg-grid-overlay opacity-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-3xl" />

      <Container>
        <div className="pb-20 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <span className="h-px w-8 bg-primary" />
              About producTeam
            </span>
          </motion.div>

          <h1 className="max-w-4xl font-display text-display-lg">
            <AnimatedText text="DESIGNING FOR" delay={0.2} />
            <br />
            <span className="text-primary">
              <AnimatedText text="HIGH-STAKES" delay={0.4} />
            </span>{' '}
            <AnimatedText text="ENVIRONMENTS" delay={0.6} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 max-w-2xl text-xl text-text-muted"
          >
            producTeam is a high-performance product design studio focused on
            UX, UI, and complex systems. We help organizations turn critical,
            high-stakes challenges into clear, scalable digital products by
            combining deep UX strategy, modern visual design, and systems
            thinking. The result is interfaces that reduce risk, accelerate
            adoption, and improve decision-making across tech, defense, and
            enterprise environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 grid gap-8 border-t border-border pt-12 sm:grid-cols-3"
          >
            <div>
              <div className="font-display text-4xl text-primary">5+</div>
              <div className="mt-1 text-text-muted">
                Years designing critical interfaces
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">50+</div>
              <div className="mt-1 text-text-muted">
                Mission-critical systems delivered
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">99.9%</div>
              <div className="mt-1 text-text-muted">
                Uptime across deployed systems
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
