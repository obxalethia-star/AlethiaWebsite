import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Container({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto max-w-(--container-page) px-5 md:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, live = false }: { children: ReactNode; live?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 text-[12.5px] text-ink-muted">
      {live && <span className="h-[7px] w-[7px] rounded-full bg-live shadow-[0_0_0_3px_#132018]" />}
      {children}
    </span>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">{children}</p>;
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90"
    >
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function GhostLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
    >
      {children}
    </Link>
  );
}

export function BriefingCta({
  heading,
  detail,
  interest = 'briefing'
}: {
  heading: string;
  detail: string;
  interest?: 'briefing' | 'whitepaper' | 'descriptor';
}) {
  const href = interest === 'briefing' ? '/about#briefing' : `/about?interest=${interest}#briefing`;
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-surface p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">{heading}</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-ink-muted">{detail}</p>
          </div>
          <PrimaryLink href={href}>Request a briefing</PrimaryLink>
        </div>
      </Container>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  dek,
  children
}: {
  eyebrow: string;
  title: string;
  dek: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line py-16 md:py-24">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted">{dek}</p>
        {children}
      </Container>
    </section>
  );
}
