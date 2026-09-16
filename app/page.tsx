import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container, Eyebrow, GhostLink, PrimaryLink, SectionLabel, BriefingCta } from '@/components/ui';
import { ThreeWayMatchProof } from '@/components/ThreeWayMatchProof';
import { RoadmapTimeline } from '@/components/RoadmapTimeline';
import { SandboxCharts } from '@/components/SandboxCharts';
import { capabilities, legacyVsAlethia, sectorBlueprints } from '@/lib/content/services';
import { sandboxMetrics } from '@/lib/content/roadmap';

export const metadata: Metadata = {
  title: 'Smart Contract Chamber for Institutional Deal Execution',
  description:
    'Your invoice approvals take three weeks. On-chain, they take three seconds. See the live three-way matching proof and the roadmap to the full deal container.',
  openGraph: {
    title: 'Alethia | Smart Contract Chamber for Institutional Deal Execution',
    description: 'Your invoice approvals take three weeks. On-chain, they take three seconds.'
  }
};

const LEGACY_STATS = [
  { label: 'Legacy reconciliation', value: 'Weeks of email threads' },
  { label: 'Legacy review cost', value: '~R6,000 / hour manual review' },
  { label: 'Legacy settlement', value: 'T+2 to T+5' }
];

export default function HomePage() {
  return (
    <main>
      {/* HOOK */}
      <section className="border-b border-line py-16 md:py-24">
        <Container>
          <Eyebrow>Smart contract chamber — MVP live</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-[2.5rem] font-semibold leading-[1.05] text-ink md:text-6xl">
            Your invoice approvals take three weeks. On-chain, they take three seconds.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink-muted md:text-lg">
            Three-way matching — purchase order, goods receipt, vendor invoice — is the first working proof of the
            Alethia smart contract chamber. See it run below, then see what it widens into.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryLink href="/about#briefing">Request a briefing</PrimaryLink>
            <GhostLink href="#roadmap">See the roadmap</GhostLink>
          </div>
        </Container>
      </section>

      {/* PROOF */}
      <section id="proof" className="border-b border-line py-16 md:py-20">
        <Container>
          <SectionLabel>Live walkthrough</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            Three-way matching, end to end.
          </h2>
          <div className="mt-8">
            <ThreeWayMatchProof />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {LEGACY_STATS.map((stat) => (
              <div key={stat.label} className="border border-line-soft p-4 font-mono text-[11px]">
                <p className="text-ink-faint uppercase tracking-[0.08em]">{stat.label}</p>
                <p className="mt-2 text-sm text-ink-muted">{stat.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WIDEN — ranked, not a grid */}
      <section className="border-b border-line py-16 md:py-20">
        <Container>
          <SectionLabel>What else the chamber does</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            Ranked by how close it is to working today.
          </h2>
          <ol className="mt-8 flex flex-col divide-y divide-line border-y border-line">
            {capabilities.map((capability) => (
              <li key={capability.slug} className="grid gap-4 py-6 sm:grid-cols-[60px_1fr_auto] sm:items-center">
                <span className="font-mono text-2xl text-ink-faint">{capability.order}</span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">{capability.title}</h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-6 text-ink-muted">{capability.detail}</p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex w-fit items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-accent hover:opacity-80"
                >
                  Details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="border-b border-line py-16 md:py-20">
        <Container>
          <SectionLabel>Staged roadmap</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            This is step one, not the whole product.
          </h2>
          <div className="mt-8">
            <RoadmapTimeline />
          </div>
        </Container>
      </section>

      {/* CREDIBILITY */}
      <section className="border-b border-line py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionLabel>What changes</SectionLabel>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                From fragmented administration to one governed chamber.
              </h2>
              <div className="mt-6 flex flex-col gap-3">
                {legacyVsAlethia.map(([before, after]) => (
                  <div key={before} className="border border-line p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">Legacy</p>
                    <p className="mt-1.5 text-sm text-ink-muted">{before}</p>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">Alethia</p>
                    <p className="mt-1.5 text-sm text-ink">{after}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel>The moat</SectionLabel>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
                Vertical specificity in asset-heavy sectors.
              </h2>
              <p className="mt-4 text-sm leading-6 text-ink-muted">
                Generic workflow software treats a mining royalty split the same as a SaaS renewal. The early moat is
                pre-built logic for sectors where administration and compliance slow projects down most.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {sectorBlueprints.map((s) => (
                  <span key={s.sector} className="border border-line px-3 py-1.5 font-mono text-[11px] text-ink-muted">
                    {s.sector}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-start gap-2 border border-line-soft p-4 text-sm leading-6 text-ink-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-match" />
                Licensing roadmap targets FSP and CASP registration with the FSCA by 2030 —{' '}
                <Link href="/about#licensing" className="text-accent hover:opacity-80">
                  see the full path
                </Link>
                .
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* DEMOTED sandbox material */}
      <section className="border-b border-line py-16 md:py-20">
        <Container>
          <SectionLabel>Sandbox &amp; target figures — not live data</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            What the testnet demo and prospect map are built to show.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            {sandboxMetrics.map((metric) => (
              <div key={metric.label} className="border border-line p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">{metric.label}</p>
                <p className="mt-2 font-display text-xl font-semibold text-ink">{metric.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <SandboxCharts />
          </div>
        </Container>
      </section>

      <BriefingCta
        heading="See the chamber run on your own numbers."
        detail="Bring a real purchase order and invoice pair to the briefing and we'll walk the match live."
      />
    </main>
  );
}
