import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Scale,
  ShieldCheck
} from 'lucide-react';
import { enterpriseIntegrations, enterpriseModules } from '../../data/enterpriseModules';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'ERP Workspace | OBXAlethia',
  description:
    'OBXAlethia ERP workspace for accounting, finance, legal, HR, investment management, risk, reporting, and governed institutional operations.'
};

const departments = [
  {
    title: 'Accounting & Core Ledger',
    icon: <BarChart3 className="h-5 w-5 text-emerald-300" />,
    detail: 'Triple-entry ledger planning, reconciliations, asset matching, and evidence-ready records.'
  },
  {
    title: 'Legal & Lifecycle',
    icon: <Scale className="h-5 w-5 text-violet-300" />,
    detail: 'Contract configuration, signature coordination, arbitration paths, and secure evidence vaults.'
  },
  {
    title: 'Finance & Treasury',
    icon: <BriefcaseBusiness className="h-5 w-5 text-emerald-300" />,
    detail: 'Liquidity forecasts, capital allocation rules, stablecoin treasury controls, and spend approvals.'
  },
  {
    title: 'Insurance & Risk',
    icon: <ShieldCheck className="h-5 w-5 text-violet-300" />,
    detail: 'Policy registries, claims workflow concepts, coverage gaps, and risk status monitoring.'
  },
  {
    title: 'Reporting & Documents',
    icon: <FileText className="h-5 w-5 text-zinc-300" />,
    detail: 'Investor updates, board packs, regulated filings, document storage, and evidence exports.'
  }
];

const outcomes = [
  'Connect daily operations to deal-container records',
  'Keep legal, finance, risk, and board activity in one audit trail',
  'Prepare workflows for smart contract execution and escrow release',
  'Use AI agents as assistive operators with human approval gates'
];

export default function ERPPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/" className="text-xs uppercase tracking-[0.24em] text-zinc-500 transition hover:text-white">
          Back to overview
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">ERP workspace</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              Enterprise operations wrapped around the smart contract chamber.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
              OBXAlethia uses ERP familiarity to make Web3 infrastructure usable for institutions. The MVP turns
              accounting, finance, legal, risk, documents, and board approvals into connected workflows inside the
              same permissioned transaction record.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/agents"
                className="group inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400"
              >
                See agent mesh <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
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
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">ERP outcomes</p>
            <div className="mt-5 grid gap-2 text-sm text-zinc-300">
              {outcomes.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <article key={department.title} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                {department.icon}
              </span>
              <h2 className="mt-5 text-xl font-semibold text-white">{department.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{department.detail}</p>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-3xl border border-white/10 bg-black/70 p-6 md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Module library</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Planned ERP modules for the MVP roadmap.</h2>
            </div>
            <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-emerald-200">
              In build
            </span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {enterpriseModules.map((module) => (
              <article key={module.title} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-white">{module.title}</h3>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                    {module.category}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{module.description}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-zinc-500">
                  {module.primaryActions.slice(0, 2).map((action) => (
                    <span key={action} className="rounded-full border border-white/10 px-2 py-1">
                      {action}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-[11px] text-zinc-500">
            {enterpriseIntegrations.map((integration) => (
              <span key={integration} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">
                {integration}
              </span>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
