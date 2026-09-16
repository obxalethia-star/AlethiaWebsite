import Link from 'next/link';

const COLUMNS = [
  {
    heading: 'Platform',
    links: [
      { label: 'Services', href: '/services' },
      { label: 'Agents', href: '/agents' },
      { label: 'Web3', href: '/web3' }
    ]
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Resources', href: '/resources' }
    ]
  },
  {
    heading: 'Talk to us',
    links: [
      { label: 'Request a briefing', href: '/about#briefing' },
      { label: 'FSCA compliance primer', href: '/resources#fsca-primer' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-(--container-page) px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-display text-lg font-bold text-ink">
              ALETHIA
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-ink-muted">
              A smart contract chamber for institutional deal execution, built in South Africa on a path to FSP and
              CASP licensing.
            </p>
          </div>
          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">{column.heading}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line-soft pt-6 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} OBX Alethia (Pty) Ltd. Pre-licensing venture, South Africa.</p>
          <p className="max-w-2xl font-mono">
            OBX Alethia is pursuing FSP and CASP registration with the FSCA and does not yet hold either licence.
            Nothing on this site is investment advice or a solicitation to trade.
          </p>
        </div>
      </div>
    </footer>
  );
}
