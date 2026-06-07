import Link from 'next/link';
import { EarlyAccessForm } from '../../components/EarlyAccessForm';

const benefits = [
  'Private workspace provisioning with role-based permissions',
  'Priority onboarding for institutional deal containers',
  'Early access to agentic ERP modules and smart contract templates'
];

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#05060b] text-slate-100">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="text-xs uppercase tracking-[0.3em] text-slate-400 hover:text-white">
          ← Back to overview
        </Link>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-indigo-300">Early access</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Register for platform access</h1>
        <p className="mt-4 text-sm text-slate-300">
          Join the early access program to deploy institutional workspaces, invite counterparties, and map permissions
          to on-chain roles before general availability.
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

        <div className="mt-8">
          <EarlyAccessForm />
        </div>
      </div>
    </div>
  );
}
