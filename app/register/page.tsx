import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, CheckCircle2, Handshake, TrendingUp } from 'lucide-react';
import { EarlyAccessForm } from '../../components/EarlyAccessForm';
import { SiteHeader } from '../../components/SiteHeader';

export const metadata: Metadata = {
  title: 'Request Briefing | OBXAlethia',
  description:
    'Request an OBXAlethia briefing for the pre-seed MVP, smart contract chamber, Web3 ERP roadmap, customer pilots, partnerships, and investor conversations.'
};

const benefits = [
  'MVP walkthrough of the smart contract chamber and ERP workspace',
  'Discussion of pilot use cases across mining, agriculture, real estate, art, and private markets',
  'Investor context for runway, technical milestones, and regulated deployment path'
];

const audiences = [
  {
    title: 'Customers',
    icon: <Building2 className="h-5 w-5 text-emerald-300" />,
    detail: 'Explore whether a permissioned deal container can support a real institutional transaction or pilot workflow.'
  },
  {
    title: 'Partners',
    icon: <Handshake className="h-5 w-5 text-violet-300" />,
    detail: 'Discuss future collaboration across legal, custody, compliance, integration, audit, and data infrastructure.'
  },
  {
    title: 'Investors',
    icon: <TrendingUp className="h-5 w-5 text-emerald-300" />,
    detail: 'Review the pre-seed thesis, first-month ask, MVP scope, licensing path, and early commercial roadmap.'
  }
];

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/" className="text-xs uppercase tracking-[0.24em] text-zinc-500 transition hover:text-white">
          Back to overview
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-violet-300">Request briefing</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight text-white md:text-6xl">
              Talk to OBXAlethia about the pre-seed MVP.
            </h1>
            <p className="mt-6 text-base leading-8 text-zinc-300">
              We invite you to open the table for serious customer, partner, and investor conversations. OBXAlethia is at the beginning:
              the focus is MVP validation, technical standards, pilot fit, and the path toward regulated deployment.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">What the briefing covers</p>
              <div className="mt-4 grid gap-3 text-sm text-zinc-300">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <EarlyAccessForm />
        </div>

        <section className="mt-14 rounded-3xl border border-white/10 bg-black/70 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Who should reach out</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Company information for customers, partners, and investors.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
            The current website is constructed as a decompisiton of the pre-seed MVP, so the invitation is not a mass-market sign-up.
            It is a route into focused discovery, pilot conversations, and investment diligence.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience.title} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  {audience.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{audience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{audience.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
