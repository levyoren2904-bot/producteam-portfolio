'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout';
import { SectionHeader } from '@/components/ui';

const values = [
  {
    title: 'Clarity Over Complexity',
    description:
      'Complex systems require simple interfaces. We ruthlessly eliminate cognitive overhead so operators can focus on what matters.',
  },
  {
    title: 'Fail-Safe by Design',
    description:
      'Every interaction is designed with failure modes in mind. Recovery paths are as important as happy paths.',
  },
  {
    title: 'Human-Centered Rigor',
    description:
      'We combine deep user research with systematic design methods. Intuition informed by evidence.',
  },
  {
    title: 'Long-Term Partnership',
    description:
      'Critical systems evolve over decades. We build relationships and design systems that scale with your mission.',
  },
];

export function Values() {
  return (
    <section className="section-padding bg-surface">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeader
              label="Our Philosophy"
              title="PRINCIPLES THAT GUIDE US"
              description="When design decisions have real consequences, principles matter more than trends."
            />

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 border-l-2 border-primary pl-6 text-xl italic text-text"
            >
              "The best interface is invisible. The operator should see only the
              mission, never the tool."
            </motion.blockquote>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <div>
                    <h3 className="font-display text-lg transition-colors group-hover:text-primary">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-text-muted">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
