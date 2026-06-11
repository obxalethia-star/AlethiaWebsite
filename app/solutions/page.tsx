import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, CheckCircle2, Gavel, Layers3, LineChart } from 'lucide-react';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Solutions | OBXAlethia',
  description:
    'OBXAlethia solution layer for deal containers, AI contract generation, escrow, arbitration, revenue automation, and ERP-ready institutional workflows.'
};

const solutions = [
  {
    id: 'deal-containers',
    title: 'Deal Containers',
    audience: 'Institutional transactions, project finance, private markets, mining, agriculture, real estate',
    detail:
      'Permissioned digital chambers where counterparties, documents, approvals, signatures, milestones, and audit trails live in one governed workspace.',
    outcomes: ['Counterparty roles and permissions', 'Document and evidence vaults', 'Board-ready activity history'],
    icon: <Layers3 className="h-5 w-5 text-violet-300" />
  },
  {
    id: 'ai-contract-generation',
    title: 'AI Contract Generation',
    audience: 'Legal teams, founders, advisors, boards, and specialist counsel',
    detail:
      'AI-assisted contract drafting and clause preparation for attorney review, connected directly to the deal container and its approval record.',
    outcomes: ['Clause drafts from transaction context', 'Human review before execution', 'Structured contract evidence'],
    icon: <BrainCircuit className="h-5 w-5 text-emerald-300" />
  },
  {
    id: 'escrow-arbitration',
    title: 'Escrow & Arbitration',
    audience: 'Multi-party agreements with conditional capital release or dispute paths',
    detail:
      'Milestone escrow, release conditions, dispute evidence, arbitration workflow concepts, and settlement visibility for complex institutional deals.',
    outcomes: ['Milestone release rules', 'Dispute record and evidence trail', 'Multi-sig approval planning'],
    icon: <Gavel className="h-5 w-5 text-violet-300" />
  },
  {
    id: 'revenue-automation',
    title: 'Revenue Automation',
    audience: 'Asset owners, platforms, funds, IP holders, and project operators',
    detail:
      'Waterfall logic, royalties, stakeholder distributions, subscription rules, and reporting surfaces connected to contract activity.',
    outcomes: ['Transparent distribution rules', 'Stakeholder reporting', 'Future on-chain settlement hooks'],
    icon: <LineChart className="h-5 w-5 text-emerald-300" />
  }
];

const industries = [
  'Mining & energy',
  'Agriculture & wine',
  'Commercial real estate',
  'Private equity',
  'Investment banking',
  'Art & culture',
  'Education'
];

const beforeAfter = [
  ['5-7 disconnected vendors', 'One permissioned Deal Container'],
  ['Manual drafting and retrospective audit trails', 'AI-prepared drafts with live evidence capture'],
  ['Siloed KYC/AML checks per party', 'Continuous regtech status inside the chamber'],
  ['T+2 to T+5 settlement friction', 'Escrow logic and testnet settlement paths']
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/" className="text-xs uppercase tracking-[0.24em] text-zinc-500 transition hover:text-white">
          Back to overview
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Solution layer</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              A smart contract chamber for institutional deal execution.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
              OBXAlethia gives complex projects a single operating surface for legal workflows, approvals, escrow,
              settlement planning, and evidence. The MVP focuses on controlled collaboration before production capital
              movement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/web3"
                className="group inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400"
              >
                See Web3 rails <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/register"
                className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/10"
              >
                Request briefing
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Sector blueprints</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {industries.map((industry) => (
                <span key={industry} className="rounded-full border border-white/10 bg-black/50 px-3 py-2 text-xs text-zinc-300">
                  {industry}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-zinc-400">
              The early moat is vertical specificity: pre-built logic for asset-heavy sectors where administration,
              compliance, and capital release slow projects down.
            </p>
          </div>
        </div>

        <section className="mt-14 grid gap-5 md:grid-cols-2">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              id={solution.id}
              className="scroll-mt-28 rounded-3xl border border-white/10 bg-zinc-950/70 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                {solution.icon}
              </span>
              <p className="mt-5 text-xs uppercase tracking-[0.22em] text-zinc-500">{solution.audience}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{solution.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{solution.detail}</p>
              <div className="mt-5 grid gap-2 text-sm text-zinc-300">
                {solution.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    {outcome}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-3xl border border-white/10 bg-black/70 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">What changes</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">From fragmented administration to one governed chamber.</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {beforeAfter.map(([before, after]) => (
              <div key={before} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Legacy</p>
                <p className="mt-2 text-sm text-zinc-400">{before}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-emerald-300">OBXAlethia MVP direction</p>
                <p className="mt-2 text-sm text-white">{after}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
