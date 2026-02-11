import type { Metadata } from 'next';
import { Header, Footer, Container } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for producTeam - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
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
                PRIVACY <span className="text-primary">POLICY</span>
              </h1>
              <p className="mt-6 text-sm text-text-subtle">
                Last updated: 11.02.2026
              </p>
            </div>

            <div className="prose-custom prose prose-invert max-w-3xl pb-20">
              <p className="text-lg text-text-muted">
                This Privacy Policy explains how producTeam (&quot;we&quot;,
                &quot;us&quot;, &quot;our&quot;) collects, uses, and protects
                your personal information when you visit our website{' '}
                <a href="https://producteam-portfolio.vercel.app/">
                  https://producteam-portfolio.vercel.app/
                </a>{' '}
                (the &quot;Site&quot;). We are committed to protecting your
                privacy and handling your data in a transparent and responsible
                manner.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We may collect the following types of information:
              </p>

              <h3>a. Information You Provide Voluntarily</h3>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Company name</li>
                <li>
                  Any information submitted via contact forms or direct
                  communication
                </li>
              </ul>

              <h3>b. Automatically Collected Information</h3>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and interaction data</li>
                <li>Referrer URLs</li>
              </ul>
              <p>
                This data is collected through cookies and standard analytics
                tools.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Respond to inquiries and requests</li>
                <li>Communicate with potential clients</li>
                <li>Improve our website and services</li>
                <li>Analyze site usage and performance</li>
                <li>Maintain security and prevent abuse</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal data.
              </p>

              <h2>3. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Ensure proper site functionality</li>
                <li>Analyze traffic and user behavior</li>
                <li>Improve user experience</li>
              </ul>
              <p>
                You can control cookies through your browser settings.
              </p>

              <h2>4. Third-Party Services</h2>
              <p>We may use third-party services such as:</p>
              <ul>
                <li>Analytics providers (e.g., Google Analytics)</li>
                <li>Hosting providers</li>
                <li>Email communication services</li>
              </ul>
              <p>
                These providers are authorized to use your information only as
                necessary to provide their services.
              </p>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access, loss,
                misuse, or alteration. However, no system is completely secure,
                and we cannot guarantee absolute security.
              </p>

              <h2>6. Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary to fulfill
                the purposes described in this policy, unless a longer retention
                period is required by law.
              </p>

              <h2>7. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to:
              </p>
              <ul>
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Object to processing</li>
                <li>Withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, contact us at:{' '}
                <a href="mailto:reuvens@energyteam.co.il">
                  reuvens@energyteam.co.il
                </a>
              </p>

              <h2>8. International Data Transfers</h2>
              <p>
                Your information may be transferred and processed outside your
                country of residence. We ensure appropriate safeguards are in
                place for such transfers.
              </p>

              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated revision date.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact:
              </p>
              <p>
                <strong>producTeam</strong>
                <br />
                Email:{' '}
                <a href="mailto:reuvens@energyteam.co.il">
                  reuvens@energyteam.co.il
                </a>
                <br />
                Website:{' '}
                <a href="https://producteam-portfolio.vercel.app/">
                  https://producteam-portfolio.vercel.app/
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
