'use client';

import React, { useState } from 'react';

export function EarlyAccessForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Registration received</p>
        <p className="mt-4 text-lg font-semibold text-white">You are on the early access list.</p>
        <p className="mt-2 text-sm text-slate-300">
          Our team will review your application and reach out with workspace credentials and onboarding steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-slate-300">
          Full name
          <input
            required
            name="name"
            type="text"
            placeholder="Jane Doe"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Work email
          <input
            required
            name="email"
            type="email"
            placeholder="jane@institution.com"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Organization
          <input
            required
            name="organization"
            type="text"
            placeholder="Institution or fund name"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Role / title
          <input
            required
            name="role"
            type="text"
            placeholder="Managing Director, COO, etc."
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm text-slate-300">
        Primary use case
        <textarea
          name="useCase"
          rows={4}
          placeholder="Describe the deals, workflows, or verticals you plan to run on OBXAlethia."
          className="mt-2 w-full resize-none rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
        />
      </label>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-90"
      >
        Submit early access request
      </button>
    </form>
  );
}
