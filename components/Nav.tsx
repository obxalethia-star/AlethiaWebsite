'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Agents', href: '/agents' },
  { label: 'Web3', href: '/web3' },
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' }
];

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
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-(--container-page) items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/icons/OBXAlethia-Favicon.png" alt="" className="h-8 w-8 rounded-sm" />
          <span className="font-display text-[15px] font-bold tracking-tight text-ink">ALETHIA</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`rounded-sm px-3 py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors ${
                isActive(item.href) ? 'text-accent' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/about#briefing"
            className="hidden items-center gap-2 border border-accent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-accent transition-colors hover:bg-accent-soft md:inline-flex"
          >
            Request briefing <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink md:hidden"
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
          className="fixed inset-x-0 top-[65px] bottom-0 z-50 overflow-y-auto border-t border-line bg-bg md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`border-b border-line-soft py-4 font-display text-xl font-medium ${
                  isActive(item.href) ? 'text-accent' : 'text-ink'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/about#briefing"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-accent px-5 py-3.5 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-on-accent"
            >
              Request a briefing <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
