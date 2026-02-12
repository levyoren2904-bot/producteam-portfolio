import type { Metadata } from 'next';
import { Header, Footer, Container } from '@/components/layout';
import { SectionHeader } from '@/components/ui';
import { CaseGrid } from '@/components/case-study';
import { getAllCases } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected case studies from systemic, a product design studio specializing in critical systems for defense, infrastructure, and enterprise platforms.',
};

export default function WorkPage() {
  const cases = getAllCases();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="bg-background pt-32 md:pt-40">
          <Container>
            <div className="relative pb-16">
              {/* Background Elements */}
              <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

              <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-primary">
                Case Studies
              </span>
              <h1 className="max-w-3xl font-display text-display-lg">
                INTERFACES THAT <span className="text-primary">MATTER</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-text-muted">
                Each project represents a unique challenge in high-stakes
                environments where precision, clarity, and reliability are
                paramount.
              </p>
            </div>
          </Container>
        </section>

        {/* Cases Grid */}
        <CaseGrid cases={cases} showHeader={false} />
      </main>
      <Footer />
    </>
  );
}
