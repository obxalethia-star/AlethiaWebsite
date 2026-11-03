'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Agents', href: '/agents' },
  { label: 'Web3', href: '/web3' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' }
];

const CTA_CLASS =
  'bg-cta text-cta-ink border border-cta-line transition-[background-color,border-color,box-shadow] duration-250 hover:bg-cta-hover hover:border-cta-line-hover hover:shadow-[0_0_0_1px_var(--color-cta-line-hover),0_10px_26px_-10px_rgba(139,92,246,0.55)]';

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className="sticky z-50 mx-auto w-full max-w-(--container-page) px-5 pt-4 md:px-6"
      style={{ top: 'calc(env(safe-area-inset-top, 0px) + 1rem)' }}
    >
      <div className="flex items-center justify-between gap-4 rounded-full border border-line bg-surface/90 py-2.5 pl-5 pr-2.5 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/icons/OBXAlethia-Favicon.png" alt="" className="h-6.5 w-6.5" />
          <span className="font-display text-base font-bold tracking-tight text-ink">Alethia</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`rounded-full px-3.5 py-2.5 text-[13px] font-medium transition-colors ${
                isActive(item.href) ? 'bg-surface-raised text-ink' : 'text-ink-muted hover:bg-surface-raised hover:text-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/about#briefing"
            className={`hidden rounded-full px-5 py-2.5 text-[13px] font-semibold md:inline-flex ${CTA_CLASS}`}
          >
            Request briefing
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface-raised lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="mt-3 overflow-hidden rounded-3xl border border-line bg-surface p-2 backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`rounded-2xl px-4 py-3.5 font-display text-lg font-semibold transition-colors ${
                  isActive(item.href) ? 'bg-surface-raised text-ink' : 'text-ink-muted hover:bg-surface-raised hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/about#briefing"
              className={`mt-2 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold ${CTA_CLASS}`}
            >
              Request briefing
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
