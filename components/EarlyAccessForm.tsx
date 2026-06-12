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
      <div className="rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">Briefing request received</p>
        <p className="mt-4 text-lg font-semibold text-white">Thanks. Your request is captured.</p>
        <p className="mt-2 text-sm text-zinc-300">
          The next step is a focused discussion on MVP fit, pilot scope, technical standards, or investment diligence.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-zinc-300">
          Full name
          <input
            required
            name="name"
            type="text"
            placeholder="Jane Doe"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
          />
        </label>
        <label className="block text-sm text-zinc-300">
          Work email
          <input
            required
            name="email"
            type="email"
            placeholder="jane@institution.com"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
          />
        </label>
        <label className="block text-sm text-zinc-300">
          Organization
          <input
            required
            name="organization"
            type="text"
            placeholder="Institution or fund name"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
          />
        </label>
        <label className="block text-sm text-zinc-300">
          Role / title
          <input
            required
            name="role"
            type="text"
            placeholder="Managing Director, COO, etc."
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm text-zinc-300">
        Briefing focus
        <textarea
          name="useCase"
          rows={4}
          placeholder="Describe the pilot, partnership, investment, or technical question you want to discuss."
          className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400"
        />
      </label>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400"
      >
        Request briefing
      </button>
    </form>
  );
}
