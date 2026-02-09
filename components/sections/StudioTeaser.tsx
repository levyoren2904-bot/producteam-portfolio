'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout';
import { Button, SectionHeader } from '@/components/ui';

const capabilities = [
  {
    title: 'Command Centers',
    description: 'Real-time operational dashboards for mission-critical decision making.',
  },
  {
    title: 'Defense Platforms',
    description: 'Secure, intuitive interfaces for military and aerospace systems.',
  },
  {
    title: 'Infrastructure Control',
    description: 'SCADA and monitoring systems for utilities and critical infrastructure.',
  },
  {
    title: 'Enterprise Systems',
    description: 'Complex data visualization and workflow management tools.',
  },
];

export function StudioTeaser() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column - Text */}
          <div>
            <SectionHeader
              label="Our Expertise"
              title="PRODUCT DESIGN FOR CRITICAL SYSTEMS"
              description="producTeam helps organizations turn complex, high-stakes challenges into clear, scalable digital systems that perform under pressure and drive measurable business impact."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button href="/studio" variant="secondary">
                About Our Studio
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Capabilities Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group rounded-lg border border-border bg-surface p-6 transition-colors duration-300 hover:border-primary/30 hover:bg-surface-elevated"
              >
                <div className="mb-3 h-1 w-8 bg-primary/50 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
                <h3 className="font-display text-lg">{capability.title}</h3>
                <p className="mt-2 text-sm text-text-muted">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
