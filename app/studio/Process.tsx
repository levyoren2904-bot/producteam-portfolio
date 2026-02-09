'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout';
import { SectionHeader } from '@/components/ui';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    description:
      'We begin with deep immersion into your operational context. Understanding workflows, constraints, regulatory requirements, and the humans who will use the system daily.',
    duration: '2-4 weeks',
  },
  {
    number: '02',
    title: 'Architecture & Strategy',
    description:
      'Information architecture, interaction models, and design strategy emerge from research findings. We map every state, edge case, and failure mode.',
    duration: '3-4 weeks',
  },
  {
    number: '03',
    title: 'Design & Validation',
    description:
      'High-fidelity prototypes tested with real operators in realistic scenarios. We iterate until the interface disappears and only the task remains.',
    duration: '6-10 weeks',
  },
  {
    number: '04',
    title: 'Implementation Support',
    description:
      'Detailed specifications, component libraries, and direct collaboration with engineering teams. We stay engaged through deployment and beyond.',
    duration: '4-8 weeks',
  },
];

export function Process() {
  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionHeader
          label="How We Work"
          title="OUR PROCESS"
          description="A rigorous methodology refined over 15 years of critical system design."
        />

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent lg:left-[39px] lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative grid gap-6 lg:grid-cols-[80px_1fr] lg:gap-12"
              >
                {/* Number */}
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-background font-display text-lg text-primary lg:h-20 lg:w-20 lg:text-2xl">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="rounded-lg border border-border bg-surface p-6 lg:p-8">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-display text-2xl">{step.title}</h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-text-subtle">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
