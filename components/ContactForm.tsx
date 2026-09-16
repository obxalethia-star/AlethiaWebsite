'use client';

import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

const INTEREST_LABEL: Record<string, string> = {
  briefing: 'Request a briefing',
  whitepaper: 'Request the whitepaper',
  descriptor: 'Request the value proposition descriptor'
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const interest = ['briefing', 'whitepaper', 'descriptor'].includes(searchParams.get('interest') ?? '')
    ? (searchParams.get('interest') as 'briefing' | 'whitepaper' | 'descriptor')
    : 'briefing';

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      organization: String(data.get('organization') ?? ''),
      role: String(data.get('role') ?? ''),
      focus: String(data.get('focus') ?? ''),
      interest,
      company_website: String(data.get('company_website') ?? '')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error ?? 'Something went wrong. Please try again.');
      }
      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-match bg-match-soft p-8">
        <CheckCircle2 className="h-6 w-6 text-match" />
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-match">Request received</p>
        <p className="mt-3 text-lg font-medium text-ink">Thanks — we have it.</p>
        <p className="mt-2 text-sm leading-6 text-ink-muted">
          We'll follow up by email to arrange a focused conversation on MVP fit, pilot scope, or diligence.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-surface p-6 md:p-8" noValidate>
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">{INTEREST_LABEL[interest]}</p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-ink-muted" htmlFor="cf-name">
          Full name
          <input
            required
            id="cf-name"
            name="name"
            type="text"
            placeholder="Jane Dlamini"
            className="mt-2 w-full border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
          />
        </label>
        <label className="block text-sm text-ink-muted" htmlFor="cf-email">
          Work email
          <input
            required
            id="cf-email"
            name="email"
            type="email"
            placeholder="jane@institution.co.za"
            className="mt-2 w-full border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
          />
        </label>
        <label className="block text-sm text-ink-muted" htmlFor="cf-org">
          Organization
          <input
            required
            id="cf-org"
            name="organization"
            type="text"
            placeholder="Institution or fund name"
            className="mt-2 w-full border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
          />
        </label>
        <label className="block text-sm text-ink-muted" htmlFor="cf-role">
          Role / title
          <input
            required
            id="cf-role"
            name="role"
            type="text"
            placeholder="Managing Director, COO, etc."
            className="mt-2 w-full border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm text-ink-muted" htmlFor="cf-focus">
        Briefing focus
        <textarea
          id="cf-focus"
          name="focus"
          rows={4}
          placeholder="Describe the pilot, partnership, investment, or technical question you want to discuss."
          className="mt-2 w-full resize-none border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
        />
      </label>

      {/* honeypot, hidden from real users */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="cf-company-website">Leave this field empty</label>
        <input id="cf-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <div className="mt-4 border border-break bg-break-soft p-3 text-xs text-ink">{errorMessage}</div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full bg-accent px-6 py-3.5 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-on-accent transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === 'submitting' ? 'Sending…' : INTEREST_LABEL[interest]}
      </button>
    </form>
  );
}
