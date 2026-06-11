import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, CheckCircle2, ShieldCheck } from 'lucide-react';
import { aiAgents } from '../../data/aiAgents';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'AI Agent Mesh | OBXAlethia',
  description:
    'OBXAlethia AI agent mesh for capital structuring, risk monitoring, escrow planning, reporting, and human-in-the-loop governance.'
};

const operatingRules = [
  'Agents prepare and route work; executives approve sensitive actions.',
  'Every recommendation must attach context, evidence, and workflow state.',
  'Legal, compliance, and settlement steps remain auditable inside the deal container.',
  'The MVP begins with five focused agents before expanding module coverage.'
];

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/" className="text-xs uppercase tracking-[0.24em] text-zinc-500 transition hover:text-white">
          Back to overview
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">AI agent mesh</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              Agentic workflows for deal preparation, not unchecked execution.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
              OBXAlethia agents support the smart contract chamber by preparing covenant logic, risk checks, escrow
              steps, reporting packs, and boardroom records. Human approval gates stay visible by design.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/erp"
                className="group inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400"
              >
                Explore ERP workspace <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/solutions"
                className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/10"
              >
                See solution layer
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Operating model</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-500">Assistive, governed, auditable</p>
              </div>
            </div>
            <div className="mt-5 grid gap-2 text-sm text-zinc-300">
              {operatingRules.map((rule) => (
                <div key={rule} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {aiAgents.map((agent) => (
            <article key={agent.name} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Bot className="h-5 w-5 text-violet-300" />
              </span>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-zinc-500">{agent.focus}</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{agent.name}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{agent.description}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-zinc-500">
                {agent.integrations.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/10 bg-black/40 px-2 py-1">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-3xl border border-white/10 bg-black/70 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Why agents matter</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">The agent mesh is the workflow brain around the chamber.</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-400">
            The chamber holds the transaction state. The ERP modules expose the operating surface. The agents sit
            between them, turning messy institutional activity into structured tasks, recommendations, compliance
            checks, and reporting artifacts that humans can approve.
          </p>
        </section>
      </section>
    </main>
  );
}
