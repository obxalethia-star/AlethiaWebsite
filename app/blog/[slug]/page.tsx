import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Container, BriefingCta } from '@/components/ui';
import { blogPosts, getBlogPost } from '@/lib/content/blog';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Not found' };
  return {
    title: post.title,
    description: post.dek,
    openGraph: { title: post.title, description: post.dek, type: 'article' },
    twitter: { card: 'summary_large_image', title: post.title, description: post.dek }
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main>
      <article className="border-b border-line py-14 md:py-20">
        <Container className="max-w-3xl!">
          <Link href="/blog" className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted hover:text-ink">
            <ArrowLeft className="h-3.5 w-3.5" /> All articles
          </Link>
          <p className="mt-6 font-mono text-[11px] text-ink-faint">
            {formatDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="mt-3 text-balance font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-7 text-ink-muted">{post.dek}</p>

          <div className="mt-10 flex flex-col gap-5">
            {post.blocks.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="mt-4 font-display text-xl font-semibold text-ink">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="flex flex-col gap-2 border-l-2 border-line pl-5">
                    {block.items.map((item) => (
                      <li key={item} className="text-[15px] leading-7 text-ink-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-[15px] leading-7 text-ink-muted">
                  {block.text}
                </p>
              );
            })}
          </div>
        </Container>
      </article>

      <BriefingCta heading="Want the detail behind this?" detail="Request a briefing and we'll go deeper on whatever part of this raised a question." />
    </main>
  );
}
