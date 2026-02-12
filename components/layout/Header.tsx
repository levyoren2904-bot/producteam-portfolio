'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { Button } from '@/components/ui/Button';

const navItems = [
  { href: '/work', label: 'Work' },
  { href: '/studio', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'blur-backdrop border-b border-border/50 bg-background/80'
            : 'bg-transparent'
        )}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group relative z-50 flex items-center gap-2"
              aria-label="systemic home"
            >
              <Image
                src="/systemic-logo.svg"
                alt="systemic"
                width={140}
                height={40}
                priority
                className="h-9 w-auto"
              />
              <span className="text-xs text-text-muted">by Energy Team</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'link-underline text-sm font-medium uppercase tracking-wide transition-colors',
                    pathname === item.href
                      ? 'text-text'
                      : 'text-text-muted hover:text-text'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" size="sm">
                Start a Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={cn(
                    'h-0.5 w-6 bg-text transition-all duration-300',
                    isMobileMenuOpen && 'translate-y-2 rotate-45'
                  )}
                />
                <span
                  className={cn(
                    'h-0.5 w-6 bg-text transition-all duration-300',
                    isMobileMenuOpen && 'opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'h-0.5 w-6 bg-text transition-all duration-300',
                    isMobileMenuOpen && '-translate-y-2 -rotate-45'
                  )}
                />
              </div>
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <Container className="flex h-full flex-col items-center justify-center">
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'font-display text-4xl tracking-tight transition-colors',
                        pathname === item.href
                          ? 'text-primary'
                          : 'text-text hover:text-primary'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4"
                >
                  <Button href="/contact" size="lg">
                    Start a Project
                  </Button>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
