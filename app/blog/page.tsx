import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container, PageHero } from '@/components/ui';
import { blogPosts } from '@/lib/content/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thesis articles that carry the Alethia argument: why three-way matching first, the FSCA licensing path, and why asset-heavy sectors stall.'
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogIndexPage() {
  return (
    <main>
      <PageHero eyebrow="Blog" title="Thesis articles, not announcements." dek="The reasoning behind the roadmap, written out in full." />
      <section className="py-14 md:py-20">
        <Container>
          <div className="flex flex-col divide-y divide-line border-y border-line">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid gap-3 py-8 sm:grid-cols-[160px_1fr_auto] sm:items-center">
                <span className="font-mono text-[11px] text-ink-faint">{formatDate(post.date)}</span>
                <div>
                  <h2 className="font-display text-xl font-medium text-ink group-hover:text-accent">{post.title}</h2>
                  <p className="mt-1.5 max-w-2xl text-sm leading-6 text-ink-muted">{post.dek}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">{post.readingTime}</p>
                </div>
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-ink-faint transition-colors group-hover:text-accent sm:block" />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
