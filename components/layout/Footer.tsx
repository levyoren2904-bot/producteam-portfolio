'use client';

import Link from 'next/link';
import { Container } from './Container';

const footerLinks = {
  navigation: [
    { href: '/work', label: 'Work' },
    { href: '/studio', label: 'Studio' },
    { href: '/contact', label: 'Contact' },
  ],
  social: [
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://dribbble.com', label: 'Dribbble' },
    { href: 'https://twitter.com', label: 'X / Twitter' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-display text-3xl tracking-tight text-text"
            >
              producTeam
            </Link>
            <p className="mt-4 max-w-md text-text-muted">
              A high-performance product design studio that helps organizations
              turn complex challenges into clear, scalable, and
              revenue-driving digital systems.
            </p>
            <p className="mt-6 font-mono text-sm text-text-subtle">
              Design that works, performs, and delivers measurable impact.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-display text-sm uppercase tracking-wide text-text-subtle">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-display text-sm uppercase tracking-wide text-text-subtle">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-text-subtle">
            © {currentYear} producTeam. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-subtle">
            <Link
              href="/privacy"
              className="transition-colors hover:text-text"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-text">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
