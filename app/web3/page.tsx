import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { Container, Eyebrow, PageHero, SectionLabel, BriefingCta } from '@/components/ui';
import { HardwareWalletArt } from '@/components/illustrations/HardwareWallet';
import { CardVisual } from '@/components/illustrations/CardVisual';
import { alethiaCoin, guardrails, multiAssetSupport, pillars, settlementWorkflows } from '@/lib/content/web3';

export const metadata: Metadata = {
  title: 'Web3',
  description:
    'Why the chamber runs on-chain at all: the smart contract runtime, tokenization engine, custody and governance, settlement rails, Alethia Coin, and hardware-key custody concepts.'
};

const STATUS_STYLE: Record<string, string> = {
  'MVP live': 'text-match border-match',
  'Building next': 'text-accent border-accent',
  Roadmap: 'text-ink-faint border-line'
};

export default function Web3Page() {
  return (
    <main>
      <PageHero
        eyebrow="Why on-chain at all"
        title="On-chain rails for contracts, custody, and settlement — not crypto decoration."
        dek="Web3 exists here to make capital movement, contract state, approvals, and compliance evidence programmable, traceable, and ready for regulated deployment. Nothing more."
      >
        <div className="mt-8 grid gap-3 sm:grid-cols-2 max-w-2xl">
          {guardrails.map((g) => (
            <div key={g} className="flex items-start gap-2 border border-line-soft p-3 text-sm text-ink-muted">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-match" />
              {g}
            </div>
          ))}
        </div>
      </PageHero>

      <section className="border-b border-line py-14 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.slug} id={pillar.slug} className="scroll-mt-24 border border-line p-6">
                <span
                  className={`inline-block border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] ${STATUS_STYLE[pillar.status]}`}
                >
                  {pillar.status}
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold text-ink">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink-muted">{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="alethia-coin" className="scroll-mt-24 border-b border-line py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-block border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
                {alethiaCoin.status}
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink md:text-3xl">Alethia Coin</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-ink-muted">{alethiaCoin.description}</p>
              <div className="mt-5 flex flex-col gap-2">
                {alethiaCoin.principles.map((p) => (
                  <div key={p} className="flex items-start gap-2 text-sm text-ink-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-match" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-line bg-surface p-6">
              <SectionLabel>Multi-asset support</SectionLabel>
              <div className="mt-4 flex flex-col gap-2">
                {multiAssetSupport.map((item) => (
                  <div key={item} className="border-b border-line-soft py-2 text-sm text-ink-muted last:border-0">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-14 md:py-20">
        <Container>
          <Eyebrow>Custody concepts</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            Hardware-key signing and a settlement card — concept stage.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-muted">
            Two custody concepts on the roadmap: an offline signing key so approval authority never leaves a
            physical device, and a settlement card for institutional users who need multi-asset balances to behave
            like a normal card.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="border border-line p-6">
              <HardwareWalletArt />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">Offline signing key</p>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                Multi-sig approvals and delegated signing policies anchored to a device that holds the key
                offline — concept stage, built alongside custody &amp; governance.
              </p>
            </div>
            <div className="border border-line p-6">
              <CardVisual />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">Settlement card</p>
              <p className="mt-2 text-sm leading-6 text-ink-muted">
                A multi-asset settlement card concept for institutional spend — rand-referenced balances first,
                additional rails once settlement infrastructure is proven.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-14 md:py-20">
        <Container>
          <SectionLabel>Infrastructure outcomes</SectionLabel>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink md:text-3xl">
            Built for auditability, not novelty alone.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {settlementWorkflows.map((workflow) => (
              <div key={workflow} className="border border-line p-4 text-sm leading-6 text-ink-muted">
                {workflow}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <BriefingCta
        heading="Ask about the custody and settlement model."
        detail="We'll walk through how approvals, multi-sig, and settlement rails fit your existing treasury controls."
      />
    </main>
  );
}
