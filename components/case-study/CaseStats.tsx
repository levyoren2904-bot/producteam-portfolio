'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout';

interface CaseStatsProps {
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export function CaseStats({ stats }: CaseStatsProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="border-y border-border bg-surface py-16 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center"
            >
              <div className="font-display text-4xl text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
