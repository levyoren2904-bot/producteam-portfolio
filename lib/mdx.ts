import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const casesDirectory = path.join(process.cwd(), 'content/cases');

export interface CaseStudyFrontmatter {
  title: string;
  slug: string;
  client: string;
  industry: string;
  year: number;
  duration: string;
  role: string[];
  thumbnail: string;
  featured: boolean;
  summary: string;
  impact: string[];
}

export interface CaseStudy {
  frontmatter: CaseStudyFrontmatter;
  content: string;
}

export function getAllCaseSlugs(): string[] {
  if (!fs.existsSync(casesDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(casesDirectory);
  return fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''));
}

export function getCaseBySlug(slug: string): CaseStudy | null {
  const fullPath = path.join(casesDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    frontmatter: data as CaseStudyFrontmatter,
    content,
  };
}

export function getAllCases(): CaseStudy[] {
  const slugs = getAllCaseSlugs();
  return slugs
    .map((slug) => getCaseBySlug(slug))
    .filter((c): c is CaseStudy => c !== null)
    .sort((a, b) => b.frontmatter.year - a.frontmatter.year);
}

export function getFeaturedCases(): CaseStudy[] {
  return getAllCases().filter((c) => c.frontmatter.featured);
}
