import type { Metadata } from 'next';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Container, PageHero, SectionLabel, BriefingCta } from '@/components/ui';
import { agents, operatingPrinciples } from '@/lib/content/agents';

export const metadata: Metadata = {
  title: 'Agents',
  description:
    'The five-agent mesh behind the chamber — Capital Strategist, Risk Sentinel, Settlement Orchestrator, Insights Compiler, and Boardroom Steward — framed by who each one serves.'
};

export default function AgentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="AI agent mesh"
        title="Five agents. Each one does a job for a specific person."
        dek="The agents prepare work — capital structures, risk checks, settlement steps, reports, resolutions — while human approval gates stay visible by design."
      >
        <div className="mt-8 flex items-start gap-3 border border-line bg-surface p-4 max-w-xl">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-match" />
          <p className="text-sm leading-6 text-ink-muted">
            Operating model: <span className="text-ink">assistive, governed, auditable.</span> Agents route and
            recommend; institutions keep final authority through explicit approvals.
          </p>
        </div>
      </PageHero>

      <section className="border-b border-line py-14 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {agents.map((agent) => (
              <article key={agent.slug} id={agent.slug} className="scroll-mt-24 border border-line p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">{agent.forWhom}</p>
                <h2 className="mt-3 font-display text-xl font-semibold text-ink">{agent.name}</h2>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">{agent.focus}</p>
                <p className="mt-3 text-sm leading-6 text-ink-muted">{agent.description}</p>
                <div className="mt-5 flex flex-col gap-2">
                  {agent.runbook.map((step, i) => (
                    <div key={step} className="flex items-center gap-2 font-mono text-[11px] text-ink-muted">
                      <span className="text-ink-faint">{String(i + 1).padStart(2, '0')}</span> {step}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-14 md:py-20">
        <Container>
          <SectionLabel>Why agents matter</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            The mesh is the workflow brain around the chamber.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-muted">
            The chamber holds the transaction state. The ERP modules expose the operating surface. The agents sit
            between them, turning messy institutional activity into structured tasks, recommendations, compliance
            checks, and reporting artifacts a human can approve.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {operatingPrinciples.map((rule) => (
              <div key={rule} className="flex items-start gap-2 border border-line-soft p-4 text-sm text-ink-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-match" />
                {rule}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BriefingCta
        heading="See the agent mesh route a real deal."
        detail="Bring a transaction brief and we'll show which agents pick it up and what they hand off to whom."
      />
    </main>
  );
}
