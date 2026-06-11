import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Handshake, TrendingUp } from 'lucide-react';
import { EarlyAccessForm } from '../../components/EarlyAccessForm';
import { MailingListForm } from '../../components/MailingListForm';

export const metadata: Metadata = {
  title: 'Request Access | OBX Alethia',
  description:
    'Request access to OBX Alethia, join the release mailing list, and learn about the company for customers, partners, and potential investors.'
};

const benefits = [
  'Private workspace provisioning with role-based permissions',
  'Priority onboarding for institutional deal containers',
  'Early access to agentic ERP modules and smart contract templates'
];

const companyAudiences = [
  {
    title: 'Customers',
    icon: <Building2 className="h-5 w-5 text-cyan-300" />,
    detail: 'Learn how OBX Alethia will support enterprise workflows, regulated approvals, document trails, and launch readiness.'
  },
  {
    title: 'Partners',
    icon: <Handshake className="h-5 w-5 text-indigo-300" />,
    detail: 'Explore future collaboration across legal, custody, compliance, automation, integration, and data infrastructure.'
  },
  {
    title: 'Investors',
    icon: <TrendingUp className="h-5 w-5 text-emerald-300" />,
    detail: 'Track the platform thesis, ERP release path, market focus, and company milestones as the product moves toward launch.'
  }
];

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#05060b] text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/" className="text-xs uppercase tracking-[0.3em] text-slate-400 hover:text-white">
          Back to overview
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">Early access</p>
            <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Register for platform access.</h1>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Join the early access program to learn about OBX Alethia, follow the ERP release, and request access to
              institutional workspaces before general availability.
            </p>

            <div className="mt-8 rounded-3xl border border-slate-800 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">What you get</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <EarlyAccessForm />
        </div>

        <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-950/70 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Find out more</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Company information for customers and investors.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
            OBX Alethia is building secure ERP and Web3 infrastructure for organizations that need governed workflows,
            role-based approvals, audit trails, and operating intelligence across complex transactions.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {companyAudiences.map((audience) => (
              <article key={audience.title} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950">{audience.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{audience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{audience.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Mailing list</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Get release, ERP, and company updates.</h2>
          </div>
          <MailingListForm />
        </section>
      </div>
    </main>
  );
}
