'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Container } from '@/components/layout';
import { mdxComponents } from './MDXComponents';

interface CaseContentProps {
  source: MDXRemoteSerializeResult;
}

export function CaseContent({ source }: CaseContentProps) {
  return (
    <section className="section-padding bg-background">
      <Container size="narrow">
        <article className="prose-custom">
          <MDXRemote {...source} components={mdxComponents} />
        </article>
      </Container>
    </section>
  );
}
