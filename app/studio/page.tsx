import type { Metadata } from 'next';
import { Header, Footer, Container } from '@/components/layout';
import { Button, SectionHeader } from '@/components/ui';
import { CTABanner } from '@/components/sections';
import { StudioHero } from './StudioHero';
import { Capabilities } from './Capabilities';
import { Process } from './Process';
import { Values } from './Values';

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'systemic is a high-performance product design studio that helps organizations turn complex, high-stakes challenges into clear, scalable digital systems.',
};

export default function StudioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <StudioHero />
        <Capabilities />
        <Process />
        <Values />
        <CTABanner
          title="READY TO WORK WITH US?"
          description="We partner with organizations building systems where design decisions have real consequences."
        />
      </main>
      <Footer />
    </>
  );
}
