import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Container({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto max-w-(--container-page) px-5 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
      <span aria-hidden="true">{'// '}</span>
      {children}
    </p>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">{children}</p>;
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-on-accent transition-opacity hover:opacity-90"
    >
      {children} <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}

export function GhostLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
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
    <section className="border-t border-line py-16 md:py-20">
      <Container className="flex flex-col items-start justify-between gap-6 border border-line bg-surface p-8 md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">{heading}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-ink-muted">{detail}</p>
        </div>
        <PrimaryLink href={href}>Request a briefing</PrimaryLink>
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
    <section className="border-b border-line py-14 md:py-20">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.08] text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted">{dek}</p>
        {children}
      </Container>
    </section>
  );
}
