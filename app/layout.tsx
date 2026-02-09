import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import { StructuredData } from '@/components/StructuredData';
import { getOrganizationSchema, getWebsiteSchema } from '@/lib/structured-data';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'producTeam | Product Design & UX for Critical Systems',
    template: '%s | producTeam',
  },
  description:
    'producTeam is a high-performance product design studio specializing in UX/UI for defense, critical systems, and complex digital platforms.',
  keywords: [
    'Product Design',
    'UX',
    'UI',
    'UX UI',
    'Defense UX',
    'Defence UX',
    'Critical Systems',
    'Complex Systems',
    'Command and Control UX',
    'Product Design for Critical Systems',
    'UX UI for Defense',
  ],
  authors: [{ name: 'producTeam' }],
  creator: 'producTeam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://producteam-portfolio.vercel.app',
    siteName: 'producTeam',
    title: 'producTeam | Product Design & UX for Critical Systems',
    description:
      'High-performance product design and UX studio for command centers, defense platforms, and complex enterprise systems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'producTeam - Product Design for Critical Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'producTeam | Product Design & UX for Critical Systems',
    description:
      'producTeam designs mission-critical UX/UI and digital products that improve decision-making and business performance.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <StructuredData data={getOrganizationSchema()} />
        <StructuredData data={getWebsiteSchema()} />
      </head>
      <body className="bg-background text-text antialiased">
        {children}
      </body>
    </html>
  );
}
