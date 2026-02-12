import type { Metadata } from 'next';
import { Header, Footer, Container } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for systemic - Learn about the terms and conditions for using our website.',
};

export default function TermsPage() {
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
                Legal
              </span>
              <h1 className="max-w-2xl font-display text-display-lg">
                TERMS OF <span className="text-primary">SERVICE</span>
              </h1>
              <p className="mt-6 text-sm text-text-subtle">
                Last updated: 11.02.2026
              </p>
            </div>

            <div className="prose-custom prose prose-invert max-w-3xl pb-20">
              <p className="text-lg text-text-muted">
                Welcome to systemic (&quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;). By accessing and using our website{' '}
                <a href="https://producteam-portfolio.vercel.app">
                  https://producteam-portfolio.vercel.app
                </a>{' '}
                (the &quot;Site&quot;), you agree to comply with and be bound
                by these Terms of Service. If you do not agree to these terms,
                please do not use the Site.
              </p>

              <h2>1. Use of the Website</h2>
              <p>You may use this Site for lawful purposes only. You agree not to:</p>
              <ul>
                <li>Use the Site in any way that violates applicable laws</li>
                <li>
                  Attempt to gain unauthorized access to any part of the Site
                </li>
                <li>Interfere with the performance or security of the Site</li>
                <li>Copy, distribute, or exploit content without permission</li>
              </ul>
              <p>
                We reserve the right to restrict or terminate access if these
                terms are violated.
              </p>

              <h2>2. Intellectual Property</h2>
              <p>
                All content on this Site, including but not limited to:
              </p>
              <ul>
                <li>Text</li>
                <li>Designs</li>
                <li>Graphics</li>
                <li>Images</li>
                <li>Case studies</li>
                <li>Code samples</li>
                <li>Logos</li>
              </ul>
              <p>
                is the property of systemic or its licensors and is protected
                by intellectual property laws. You may not use, reproduce, or
                distribute any content without prior written consent.
              </p>

              <h2>3. Portfolio and Case Studies</h2>
              <p>
                Project descriptions, visuals, and case studies displayed on
                this Site are presented for demonstration and informational
                purposes only. Some materials may be modified, anonymized, or
                presented with permission. Unauthorized commercial use of these
                materials is prohibited.
              </p>

              <h2>4. Disclaimer</h2>
              <p>
                The information on this Site is provided &quot;as is&quot; and
                &quot;as available&quot;. We make no warranties, express or
                implied, regarding:
              </p>
              <ul>
                <li>Accuracy</li>
                <li>Completeness</li>
                <li>Reliability</li>
                <li>Availability</li>
              </ul>
              <p>
                We do not guarantee that the Site will be error-free or
                uninterrupted.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, systemic shall not be
                liable for any direct, indirect, incidental, or consequential
                damages arising from:
              </p>
              <ul>
                <li>Use of the Site</li>
                <li>Inability to access the Site</li>
                <li>Reliance on content published on the Site</li>
              </ul>
              <p>Use of the Site is at your own risk.</p>

              <h2>6. External Links</h2>
              <p>
                This Site may contain links to third-party websites. We are not
                responsible for the content, policies, or practices of any
                third-party sites. Accessing external sites is at your own
                discretion.
              </p>

              <h2>7. Client Engagement</h2>
              <p>
                Communication through this Site does not constitute a binding
                agreement. Any professional services provided by systemic are
                subject to separate written agreements.
              </p>

              <h2>8. Privacy</h2>
              <p>
                Your use of this Site is also governed by our{' '}
                <a href="/privacy">Privacy Policy</a>. Please review it to
                understand how we handle personal data.
              </p>

              <h2>9. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. Changes
                will be effective immediately upon posting on this page. Your
                continued use of the Site constitutes acceptance of the revised
                terms.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These Terms shall be governed and interpreted in accordance with
                the laws of Israel. Without regard to conflict of law principles.
              </p>

              <h2>11. Contact Information</h2>
              <p>
                If you have any questions regarding these Terms, please contact:
              </p>
              <p>
                <strong>systemic</strong>
                <br />
                Email:{' '}
                <a href="mailto:reuvens@energyteam.co.il">
                  reuvens@energyteam.co.il
                </a>
                <br />
                Website:{' '}
                <a href="https://producteam-portfolio.vercel.app">
                  https://producteam-portfolio.vercel.app
                </a>
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
