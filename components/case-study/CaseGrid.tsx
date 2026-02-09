'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import { CaseCard } from './CaseCard';
import type { CaseStudy } from '@/lib/mdx';

interface CaseGridProps {
  cases: CaseStudy[];
  title?: string;
  description?: string;
  showHeader?: boolean;
  featured?: boolean;
}

export function CaseGrid({
  cases,
  title = 'SELECTED WORK',
  description = 'Critical systems designed with precision and purpose.',
  showHeader = true,
  featured = false,
}: CaseGridProps) {
  if (cases.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-background">
      <Container>
        {showHeader && (
          <SectionHeader label="Case Studies" title={title} description={description} />
        )}

        {featured ? (
          // Featured layout: first item large, rest in grid
          <div className="space-y-8">
            {cases[0] && (
              <CaseCard case_={cases[0].frontmatter} index={0} featured />
            )}
            {cases.length > 1 && (
              <div className="grid gap-8 md:grid-cols-2">
                {cases.slice(1).map((case_, index) => (
                  <CaseCard
                    key={case_.frontmatter.slug}
                    case_={case_.frontmatter}
                    index={index + 1}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          // Standard grid layout
          <div className="grid gap-8 md:grid-cols-2">
            {cases.map((case_, index) => (
              <CaseCard
                key={case_.frontmatter.slug}
                case_={case_.frontmatter}
                index={index}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
