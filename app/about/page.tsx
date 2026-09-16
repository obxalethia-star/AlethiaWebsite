import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Container, Eyebrow, PageHero, SectionLabel } from '@/components/ui';
import { ContactForm } from '@/components/ContactForm';
import { licensingRoadmap } from '@/lib/content/roadmap';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The founding thesis behind OBX Alethia, the market friction it targets, the licensing roadmap to 2030, and how to request a briefing.'
};

const FRICTION_POINTS = [
  {
    title: 'Five to seven disconnected vendors per deal',
    detail: 'Legal, escrow, audit, data room, bank, and specialist counsel each keep their own record of "current status."'
  },
  {
    title: 'Manual review that scales with headcount, not volume',
    detail: 'Three-way matching, KYC refreshes, and compliance checks still route through inboxes and spreadsheets.'
  },
  {
    title: 'Settlement lag baked into the default',
    detail: 'T+2 to T+5 is treated as normal, even when every input needed to release cash was ready days earlier.'
  }
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Founding thesis"
        title="Institutions don't lack capital. They lack a record everyone trusts at the same time."
        dek="OBX Alethia is a pre-seed venture building a smart contract chamber for institutional deal execution — starting narrow, on purpose, in South Africa."
      />

      <section className="border-b border-line py-14 md:py-20">
        <Container>
          <SectionLabel>Market friction</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            What actually slows an asset-heavy deal down.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {FRICTION_POINTS.map((point) => (
              <div key={point.title} className="border border-line p-5">
                <h3 className="font-display text-base font-medium text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{point.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="licensing" className="scroll-mt-24 border-b border-line py-14 md:py-20">
        <Container>
          <Eyebrow>Licensing roadmap</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            The path to FSP and CASP registration by 2030.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-muted">
            Both licences require a functioning, auditable operation before an application is credible — so the
            roadmap builds the operating history first.
          </p>
          <ol className="mt-8 flex flex-col divide-y divide-line border-y border-line">
            {licensingRoadmap.map((item) => (
              <li key={item.year} className="grid gap-2 py-5 sm:grid-cols-[140px_1fr]">
                <span className="font-mono text-sm text-accent">{item.year}</span>
                <span className="text-sm leading-6 text-ink-muted">{item.milestone}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-line py-14 md:py-20">
        <Container>
          <SectionLabel>Team</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            A small founding team, growing with the licence path.
          </h2>
          <div className="mt-8 border border-line-soft p-6">
            <p className="text-sm leading-6 text-ink-muted">
              Team profiles go live as the venture moves out of pre-seed. In the meantime, the fastest way to meet
              the people behind Alethia is a briefing.
            </p>
          </div>
        </Container>
      </section>

      <section id="briefing" className="scroll-mt-24 py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>Request a briefing</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                Talk to us about the pre-seed MVP.
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink-muted">
                We're at the beginning: the focus is MVP validation, technical standards, pilot fit, and the path
                toward regulated deployment. This isn't a mass-market sign-up — it's a route into focused
                discovery, pilot conversations, and diligence.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  'MVP walkthrough of the smart contract chamber and three-way matching',
                  'Pilot use cases across mining, agriculture, real estate, art, and private markets',
                  'Investor context: runway, technical milestones, licensing path'
                ].map((item) => (
                  <div key={item} className="border-l-2 border-line pl-4 text-sm leading-6 text-ink-muted">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Suspense fallback={<div className="h-96 border border-line bg-surface" />}>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </main>
  );
}
