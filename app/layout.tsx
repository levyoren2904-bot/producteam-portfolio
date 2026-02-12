import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import { StructuredData } from '@/components/StructuredData';
import { getOrganizationSchema, getWebsiteSchema } from '@/lib/structured-data';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'systemic | Product Design & UX for Critical Systems',
    template: '%s | systemic',
  },
  description:
    'systemic is a high-performance product design studio specializing in UX/UI for defense, critical systems, and complex digital platforms.',
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
  authors: [{ name: 'systemic' }],
  creator: 'systemic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://producteam-portfolio.vercel.app',
    siteName: 'systemic',
    title: 'systemic | Product Design & UX for Critical Systems',
    description:
      'High-performance product design and UX studio for command centers, defense platforms, and complex enterprise systems.',
    images: [
      {
        url: 'https://producteam-portfolio.vercel.app/og-image-v4.jpg',
        width: 1200,
        height: 630,
        alt: 'systemic - Product Design for Critical Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'systemic | Product Design & UX for Critical Systems',
    description:
      'systemic designs mission-critical UX/UI and digital products that improve decision-making and business performance.',
    images: ['https://producteam-portfolio.vercel.app/og-image-v4.jpg'],
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
        {/* Additional OG tags for WhatsApp compatibility */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:secure_url"
          content="https://producteam-portfolio.vercel.app/og-image-v4.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className="bg-background text-text antialiased">
        {children}
      </body>
    </html>
  );
}
