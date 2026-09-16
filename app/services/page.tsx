import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container, Eyebrow, PageHero, SectionLabel, BriefingCta } from '@/components/ui';
import { capabilities, erpModuleGroups, sectorBlueprints } from '@/lib/content/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Deal containers, AI contract generation, escrow & arbitration, and revenue automation — plus the ERP module workspace and sector blueprints, deepest capability first.'
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Solution layer"
        title="A smart contract chamber for institutional deal execution."
        dek="Four capabilities, ordered by how close each is to working software today. Every section ends in a next step, not another list."
      />

      <section className="border-b border-line py-14 md:py-20">
        <Container>
          <div className="flex flex-col divide-y divide-line">
            {capabilities.map((capability) => (
              <article key={capability.slug} id={capability.slug} className="scroll-mt-24 grid gap-6 py-12 lg:grid-cols-[80px_1fr_280px]">
                <span className="font-mono text-3xl text-ink-faint">{capability.order}</span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">{capability.audience}</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">{capability.title}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-muted">{capability.detail}</p>
                  <div className="mt-5 flex flex-col gap-2">
                    {capability.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-2 text-sm text-ink-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-match" />
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-start lg:justify-end">
                  <Link
                    href={capability.nextStep.href}
                    className="inline-flex items-center gap-2 border border-accent px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-accent transition-colors hover:bg-accent-soft"
                  >
                    {capability.nextStep.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="erp" className="scroll-mt-24 border-b border-line py-14 md:py-20">
        <Container>
          <Eyebrow>ERP module workspace</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            The familiar operating surface around the chamber.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-muted">
            Accounting, legal, finance, risk, and reporting modules connect to the same permissioned transaction
            record — grouped by function, not flattened into one wall of tiles.
          </p>
          <div className="mt-10 flex flex-col gap-10">
            {erpModuleGroups.map((group) => (
              <div key={group.category}>
                <SectionLabel>{group.category}</SectionLabel>
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {group.modules.map((module) => (
                    <div key={module.title} className="border border-line p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-base font-medium text-ink">{module.title}</h3>
                        <span className="shrink-0 border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
                          {module.category}
                        </span>
                      </div>
                      <p className="mt-2.5 text-sm leading-6 text-ink-muted">{module.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {module.primaryActions.map((action) => (
                          <span key={action} className="border border-line-soft px-2 py-1 font-mono text-[10px] text-ink-faint">
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="sector-blueprints" className="scroll-mt-24 border-b border-line py-14 md:py-20">
        <Container>
          <Eyebrow>Sector blueprints</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            Pre-built logic for the sectors where friction is worst.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sectorBlueprints.map((s) => (
              <div key={s.sector} className="border border-line p-5">
                <h3 className="font-display text-base font-medium text-ink">{s.sector}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{s.blurb}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BriefingCta
        heading="Which capability matches your pilot?"
        detail="Tell us where the friction is worst and we'll scope a briefing around it."
      />
    </main>
  );
}
