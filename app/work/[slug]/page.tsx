import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import { Header, Footer } from '@/components/layout';
import { CaseHero, CaseContent, CaseGrid } from '@/components/case-study';
import { CTABanner } from '@/components/sections';
import { getCaseBySlug, getAllCases } from '@/lib/mdx';
import { StructuredData } from '@/components/StructuredData';
import { getCaseStudySchema } from '@/lib/structured-data';

interface PageProps {
  params: { slug: string };
}

// Treat case study pages as dynamic to avoid prerender issues with MDX on Vercel
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseStudy = getCaseBySlug(params.slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: caseStudy.frontmatter.title,
    description: caseStudy.frontmatter.summary,
    openGraph: {
      title: `${caseStudy.frontmatter.title} | systemic`,
      description: caseStudy.frontmatter.summary,
      images: caseStudy.frontmatter.thumbnail
        ? [{ url: caseStudy.frontmatter.thumbnail }]
        : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const caseStudy = getCaseBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const mdxSource = await serialize(caseStudy.content);

  // Get related cases (excluding current)
  const allCases = getAllCases();
  const relatedCases = allCases
    .filter((c) => c.frontmatter.slug !== params.slug)
    .slice(0, 2);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <StructuredData data={getCaseStudySchema(caseStudy.frontmatter)} />
        <CaseHero frontmatter={caseStudy.frontmatter} />
        <CaseContent source={mdxSource} />

        {/* Related Work */}
        {relatedCases.length > 0 && (
          <CaseGrid
            cases={relatedCases}
            title="MORE WORK"
            description="Explore more of our critical system designs."
            showHeader
          />
        )}

        <CTABanner
          title="INTERESTED IN WORKING TOGETHER?"
          description="Let's discuss how we can help you build interfaces that matter."
        />
      </main>
      <Footer />
    </>
  );
}
