import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { Container, Eyebrow, PageHero, SectionLabel } from '@/components/ui';
import { glossary } from '@/lib/content/glossary';
import { licensingRoadmap } from '@/lib/content/roadmap';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Request the Alethia whitepaper and value proposition descriptor, browse the glossary, and read the FSCA compliance primer.'
};

const DOCS = [
  {
    slug: 'whitepaper',
    title: 'Whitepaper',
    detail: 'The full technical and economic thesis behind the chamber, the agent mesh, and the settlement model.'
  },
  {
    slug: 'descriptor',
    title: 'Value proposition descriptor',
    detail: 'A one-page summary built for internal circulation — what the chamber does, for whom, and why now.'
  }
];

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Documentation for diligence, not marketing collateral."
        dek="Request the whitepaper or descriptor directly, look up a term in the glossary, or read the FSCA compliance primer before a briefing."
      />

      <section id="documents" className="scroll-mt-24 border-b border-line py-14 md:py-20">
        <Container>
          <SectionLabel>Request a document</SectionLabel>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {DOCS.map((doc) => (
              <div key={doc.slug} className="border border-line p-6">
                <FileText className="h-5 w-5 text-accent" />
                <h2 className="mt-4 font-display text-xl font-semibold text-ink">{doc.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{doc.detail}</p>
                <Link
                  href={`/about?interest=${doc.slug}#briefing`}
                  className="mt-5 inline-flex items-center gap-2 border border-accent px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-accent transition-colors hover:bg-accent-soft"
                >
                  Request the {doc.title.toLowerCase()} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="glossary" className="scroll-mt-24 border-b border-line py-14 md:py-20">
        <Container>
          <Eyebrow>Glossary</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            The terms used across this site.
          </h2>
          <dl className="mt-8 grid gap-0 divide-y divide-line border-y border-line">
            {glossary.map((entry) => (
              <div key={entry.term} className="grid gap-1.5 py-5 sm:grid-cols-[220px_1fr] sm:gap-6">
                <dt className="font-display text-base font-medium text-ink">{entry.term}</dt>
                <dd className="text-sm leading-6 text-ink-muted">{entry.definition}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section id="fsca-primer" className="scroll-mt-24 py-14 md:py-20">
        <Container>
          <Eyebrow>FSCA compliance primer</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            Where Alethia stands with the regulator today.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-muted">
            OBX Alethia is a pre-licensing venture. It does not yet hold an FSP (Financial Services Provider) or CASP
            (Crypto Asset Service Provider) licence from South Africa's Financial Sector Conduct Authority. Nothing
            on this site is financial advice, and no production settlement of client funds occurs until both
            licences are in place.
          </p>
          <div className="mt-8">
            <SectionLabel>Licensing roadmap</SectionLabel>
            <ol className="mt-4 flex flex-col divide-y divide-line border-y border-line">
              {licensingRoadmap.map((item) => (
                <li key={item.year} className="grid gap-2 py-4 sm:grid-cols-[140px_1fr]">
                  <span className="font-mono text-sm text-accent">{item.year}</span>
                  <span className="text-sm leading-6 text-ink-muted">{item.milestone}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-6 text-ink-faint">
            Read more on the reasoning behind this timeline in{' '}
            <Link href="/blog/fsca-fsp-casp-licensing-path" className="text-accent hover:opacity-80">
              The FSCA path: what an FSP and CASP licence actually requires
            </Link>
            .
          </p>
        </Container>
      </section>
    </main>
  );
}
