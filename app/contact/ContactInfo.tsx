'use client';

import { motion } from 'framer-motion';

export function ContactInfo() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-10"
    >
      {/* Direct Contact */}
      <div>
        <h3 className="mb-4 font-display text-lg">Direct Contact</h3>
        <div className="space-y-3">
          <p className="text-text-muted">Reuven Serror</p>
          <a
            href="mailto:reuvens@energyteam.co.il"
            className="block text-text-muted transition-colors hover:text-primary"
          >
            reuvens@energyteam.co.il
          </a>
          <a
            href="tel:+972523032502"
            className="block text-text-muted transition-colors hover:text-primary"
          >
            +972-52-303-2502
          </a>
        </div>
      </div>

      {/* Office */}
      <div>
        <h3 className="mb-4 font-display text-lg">Office</h3>
        <address className="not-italic text-text-muted">
          Ha&apos;arava St 1
          <br />
          Giv&apos;at Shmuel
        </address>
      </div>

      {/* Response Time */}
      <div className="rounded-lg border border-border bg-surface p-6">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="font-mono text-xs uppercase tracking-wider text-text-subtle">
            Response Time
          </span>
        </div>
        <p className="text-text-muted">
          We typically respond within 24 hours on business days.
        </p>
      </div>

      {/* Security Note */}
      <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
        <h4 className="mb-2 font-display text-sm text-primary">
          Security Clearance
        </h4>
        <p className="text-sm text-text-muted">
          Our team maintains appropriate security clearances for classified
          projects. Contact us directly for sensitive inquiries.
        </p>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="mb-4 font-display text-lg">Connect</h3>
        <div className="flex gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded border border-border transition-colors hover:border-primary hover:text-primary"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded border border-border transition-colors hover:border-primary hover:text-primary"
            aria-label="Dribbble"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded border border-border transition-colors hover:border-primary hover:text-primary"
            aria-label="X / Twitter"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.aside>
  );
}
