import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Boxes, CheckCircle2, Landmark, Lock, Network, ShieldCheck } from 'lucide-react';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Web3 Stack | OBXAlethia',
  description:
    'OBXAlethia Web3 stack for smart contract chambers, tokenization, custody, governance, escrow, settlement routes, and event indexing.'
};

const pillars = [
  {
    id: 'smart-contract-chamber',
    title: 'Smart Contract Chamber',
    description:
      'The core MVP runtime for deal containers, execution states, permissions, signatures, escrow events, and evidence records.',
    icon: <Boxes className="h-5 w-5 text-violet-300" />
  },
  {
    id: 'tokenization-engine',
    title: 'Tokenization Engine',
    description:
      'Asset record concepts for ownership, lifecycle events, fractionalization models, and future Alethia Coin utility flows.',
    icon: <Landmark className="h-5 w-5 text-emerald-300" />
  },
  {
    id: 'custody-governance',
    title: 'Custody & Governance',
    description:
      'Multi-sig planning, hardware wallet links, delegated signing policies, board resolutions, and human approval gates.',
    icon: <ShieldCheck className="h-5 w-5 text-violet-300" />
  },
  {
    id: 'settlement-rails',
    title: 'Settlement Rails',
    description:
      'Milestone escrow, programmable release criteria, cross-chain route planning, and event indexing for audit-ready flows.',
    icon: <Network className="h-5 w-5 text-emerald-300" />
  }
];

const workflows = [
  'Tokenized infrastructure and real-world asset programs',
  'Programmable escrow for conditional settlement',
  'Royalty and revenue-share distribution',
  'Institutional treasury approvals and reporting',
  'Chain-attested logs for governed decisions',
  'ERP data feeds for finance, legal, risk, and investors'
];

const principles = [
  'Use Web3 where it improves execution, auditability, and settlement clarity.',
  'Keep corporate users shielded from unnecessary crypto volatility.',
  'Preserve human authority for approvals, signatures, and governance.',
  'Build toward regulated deployment after sandbox and testnet validation.'
];

export default function Web3Page() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/" className="text-xs uppercase tracking-[0.24em] text-zinc-500 transition hover:text-white">
          Back to overview
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Web3 infrastructure</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              On-chain rails for institutional contracts, custody, and settlement.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
              OBXAlethia is not adding crypto decoration to ERP. The Web3 layer exists to make capital movement,
              contract state, approvals, and compliance evidence programmable, traceable, and ready for regulated
              deployment.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400"
              >
                See solution layer <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/agents"
                className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/10"
              >
                Explore agents
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">MVP guardrails</p>
            <div className="mt-5 grid gap-3 text-sm text-zinc-300">
              {principles.map((principle) => (
                <div key={principle} className="flex items-start gap-2 rounded-2xl border border-white/10 bg-black/55 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-14 grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              id={pillar.id}
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-zinc-950/70 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                {pillar.icon}
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-white">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{pillar.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-3xl border border-white/10 bg-black/70 p-6 md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Infrastructure outcomes</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Built for auditability, not novelty alone.</h2>
            </div>
            <Lock className="h-6 w-6 text-violet-300" />
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {workflows.map((workflow) => (
              <div key={workflow} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4 text-sm leading-6 text-zinc-300">
                {workflow}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
