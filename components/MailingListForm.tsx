'use client';

import React, { useState } from 'react';

export function MailingListForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Subscribed</p>
        <p className="mt-3 text-lg font-semibold text-white">You are on the release update list.</p>
        <p className="mt-2 text-sm text-slate-300">
          We will share platform milestones, ERP release updates, and investor briefings as they become available.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
        <label className="text-sm text-slate-300">
          Name
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
          />
        </label>
        <label className="text-sm text-slate-300">
          Email
          <input
            required
            name="email"
            type="email"
            placeholder="you@company.com"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
          />
        </label>
        <button
          type="submit"
          className="self-end rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-90"
        >
          Join list
        </button>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Updates are for platform release notes, ERP availability, company progress, and investor communications.
      </p>
    </form>
  );
}
