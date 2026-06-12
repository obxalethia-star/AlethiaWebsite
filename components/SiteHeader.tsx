'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Boxes,
  BrainCircuit,
  ChevronDown,
  Gavel,
  Landmark,
  Layers3,
  LineChart,
  Lock,
  ShieldCheck
} from 'lucide-react';

const solutionItems = [
  {
    title: 'Deal Containers',
    detail: 'Permissioned workspaces for institutional transactions.',
    href: '/solutions#deal-containers',
    icon: <Layers3 className="h-4 w-4 text-violet-300" />
  },
  {
    title: 'AI Contract Generation',
    detail: 'Clause drafting, review queues, and evidence capture.',
    href: '/solutions#ai-contract-generation',
    icon: <BrainCircuit className="h-4 w-4 text-emerald-300" />
  },
  {
    title: 'Escrow & Arbitration',
    detail: 'Milestone release logic with dispute workflows.',
    href: '/solutions#escrow-arbitration',
    icon: <Gavel className="h-4 w-4 text-violet-300" />
  },
  {
    title: 'Revenue Automation',
    detail: 'Waterfalls, royalties, and stakeholder distributions.',
    href: '/solutions#revenue-automation',
    icon: <LineChart className="h-4 w-4 text-emerald-300" />
  }
];

const web3Items = [
  {
    title: 'Smart Contract Chamber',
    detail: 'Core transaction logic for the MVP.',
    href: '/web3#smart-contract-chamber',
    icon: <Boxes className="h-4 w-4 text-violet-300" />
  },
  {
    title: 'Tokenization Engine',
    detail: 'Asset issuance, lifecycle events, and ownership records.',
    href: '/web3#tokenization-engine',
    icon: <Landmark className="h-4 w-4 text-emerald-300" />
  },
  {
    title: 'Custody & Governance',
    detail: 'Multi-sig, approvals, and human authority gates.',
    href: '/web3#custody-governance',
    icon: <ShieldCheck className="h-4 w-4 text-violet-300" />
  },
  {
    title: 'Settlement Rails',
    detail: 'Escrow, cross-chain routing, and event indexing.',
    href: '/web3#settlement-rails',
    icon: <Lock className="h-4 w-4 text-emerald-300" />
  }
];

const platformItems = [
  {
    title: 'AI Agent Mesh',
    detail: 'Five assistive agents for deal flow and reporting.',
    href: '/agents',
    icon: <Bot className="h-4 w-4 text-violet-300" />
  },
  {
    title: 'ERP Workspace',
    detail: 'Accounting, legal, finance, HR, risk, and board modules.',
    href: '/erp',
    icon: <BrainCircuit className="h-4 w-4 text-emerald-300" />
  }
];

function Dropdown({
  label,
  href,
  items
}: {
  label: string;
  href: string;
  items: { title: string; detail: string; href: string; icon: ReactNode }[];
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
      </Link>
      <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-4 w-[360px] -translate-x-1/2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="rounded-3xl border border-white/10 bg-[#050507]/95 p-3 shadow-2xl shadow-violet-950/40 backdrop-blur-2xl">
          <div className="grid gap-1">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group/item flex gap-3 rounded-2xl border border-transparent p-3 transition hover:border-violet-400/20 hover:bg-white/[0.04]"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  {item.icon}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{item.title}</span>
                  <span className="mt-1 block text-xs leading-5 text-zinc-500 group-hover/item:text-zinc-300">
                    {item.detail}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/icons/OBXAlethia-Favicon.png"
            alt="OBXAlethia"
            className="h-9 w-9"
          />
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-white">OBXALETHIA</span>
            <span className="hidden text-[10px] uppercase tracking-[0.32em] text-zinc-500 sm:block">
              Web3 agentic ERP
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Dropdown label="Solutions" href="/solutions" items={solutionItems} />
          <Dropdown label="Web3" href="/web3" items={web3Items} />
          <Dropdown label="Platform" href="/agents" items={platformItems} />
        </nav>

        <Link
          href="/register"
          className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-200 transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-white"
        >
          Request briefing
          <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  );
}
