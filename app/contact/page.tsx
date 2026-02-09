import type { Metadata } from 'next';
import { Header, Footer, Container } from '@/components/layout';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact producTeam to discuss critical system product design for defense, infrastructure, and enterprise platforms.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative overflow-hidden bg-background pt-32 md:pt-40">
          {/* Background Elements */}
          <div className="pointer-events-none absolute inset-0 bg-grid-overlay opacity-20" />
          <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

          <Container>
            <div className="pb-20">
              <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-primary">
                Get in Touch
              </span>
              <h1 className="max-w-2xl font-display text-display-lg">
                LET&apos;S BUILD SOMETHING{' '}
                <span className="text-primary">CRITICAL</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-text-muted">
                Have a project in mind? We&apos;d love to hear about it. Tell us
                about your challenges and we&apos;ll discuss how we can help.
              </p>
            </div>

            <div className="grid gap-16 pb-20 lg:grid-cols-[1fr_400px] lg:gap-24">
              <ContactForm />
              <ContactInfo />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
