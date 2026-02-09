import { Header, Footer } from '@/components/layout';
import { Hero, StudioTeaser, CTABanner } from '@/components/sections';
import { CaseGrid } from '@/components/case-study';
import { getFeaturedCases } from '@/lib/mdx';

export default function HomePage() {
  const featuredCases = getFeaturedCases();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CaseGrid
          cases={featuredCases}
          title="SELECTED WORK"
          description="Mission-critical interfaces designed with precision and purpose."
          featured
        />
        <StudioTeaser />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
