import Link from 'next/link';
import { FooterWordmark } from './FooterWordmark';

const LEGAL_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Agents', href: '/agents' },
  { label: 'Web3', href: '/web3' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'FSCA primer', href: '/resources#fsca-primer' },
  { label: 'Request a briefing', href: '/about#briefing' }
];

export function Footer() {
  return (
    <footer className="mt-24 bg-black pt-8">
      <div
        className="h-16 opacity-90"
        style={{
          backgroundImage: 'radial-gradient(var(--color-line-soft) 1.4px, transparent 1.4px)',
          backgroundSize: '16px 16px',
          maskImage: 'linear-gradient(180deg, black 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(180deg, black 0%, black 40%, transparent 100%)'
        }}
      />

      <div className="mx-auto flex max-w-(--container-page) flex-wrap items-center justify-between gap-4 px-6 py-7 font-mono text-[11.5px] uppercase tracking-[0.06em] text-ink-faint">
        <span>&copy; {new Date().getFullYear()} OBX Alethia (Pty) Ltd.</span>
        <span className="flex flex-wrap gap-x-5 gap-y-2">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-ink-muted">
              {link.label}
            </Link>
          ))}
        </span>
      </div>

      <p className="mx-auto max-w-(--container-page) px-6 pb-8 font-mono text-[11px] leading-relaxed text-ink-faint/70">
        OBX Alethia is pursuing FSP and CASP registration with the FSCA and does not yet hold either licence. Nothing
        on this site is investment advice or a solicitation to trade.
      </p>

      <FooterWordmark>alethia</FooterWordmark>
    </footer>
  );
}
