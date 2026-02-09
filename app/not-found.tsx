import Link from 'next/link';
import { Header, Footer, Container } from '@/components/layout';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center">
        <section className="relative w-full overflow-hidden bg-background py-32">
          {/* Background Elements */}
          <div className="pointer-events-none absolute inset-0 bg-grid-overlay opacity-20" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

          <Container>
            <div className="relative text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                Error 404
              </span>
              <h1 className="mt-4 font-display text-display-lg">
                PAGE NOT <span className="text-primary">FOUND</span>
              </h1>
              <p className="mx-auto mt-6 max-w-md text-lg text-text-muted">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
                Let&apos;s get you back on track.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href="/" size="lg">
                  Back to Home
                </Button>
                <Button href="/work" variant="ghost" size="lg">
                  View Our Work
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
