import type { CaseStudyFrontmatter } from './mdx';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'producTeam',
    url: 'https://producteam-portfolio.vercel.app',
    logo: 'https://producteam-portfolio.vercel.app/producTeam-logo.svg',
    description:
      'producTeam is a high-performance product design studio specializing in command centers, defense platforms, and critical infrastructure systems.',
    sameAs: [
      'https://linkedin.com/company/producteam',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+972-52-303-2502',
      contactType: 'sales',
      email: 'reuvens@energyteam.co.il',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: '',
      addressRegion: '',
      postalCode: '',
      addressCountry: 'IL',
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'producTeam',
    url: 'https://producteam-portfolio.vercel.app',
    description:
      'producTeam is a product design studio specializing in critical systems design for defense, infrastructure, and enterprise platforms.',
    publisher: {
      '@type': 'Organization',
      name: 'producTeam',
    },
  };
}

export function getCaseStudySchema(frontmatter: CaseStudyFrontmatter) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: frontmatter.title,
    description: frontmatter.summary,
    dateCreated: `${frontmatter.year}`,
    creator: {
      '@type': 'Organization',
      name: 'producTeam',
    },
    about: {
      '@type': 'Thing',
      name: frontmatter.industry,
    },
    client: {
      '@type': 'Organization',
      name: frontmatter.client,
    },
  };
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'UX/UI Design',
    provider: {
      '@type': 'Organization',
      name: 'producTeam',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Command & Control Center Design',
            description:
              'Real-time operational dashboards for military, aerospace, and emergency response.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Defense Platform Interface Design',
            description:
              'Secure, intuitive interfaces for threat detection, surveillance systems, and tactical operations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Infrastructure Control System Design',
            description:
              'SCADA interfaces, utility management systems, and industrial control panels.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Application Design',
            description:
              'Complex data visualization, analytics platforms, and workflow management tools.',
          },
        },
      ],
    },
  };
}
