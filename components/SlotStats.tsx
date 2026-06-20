'use client';

import { useEffect, useRef } from 'react';

const heroStats = [
  { label: 'Stage', value: 'Pre-seed MVP' },
  { label: 'Testnet demo target', value: '$12.4B simulated flow' },
  { label: 'Institution targets', value: '150 mapped prospects' },
  { label: 'License target', value: 'FSP + CASP 2030' },
];

export function SlotStats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function run() {
      const { createTimeline, stagger } = await import('animejs');

      if (!containerRef.current) return;

      const rows = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('.slot-row')
      );

      // Create timeline with initial delay so it waits for the loading screen (which takes ~4.3s to fully finish)
      const tl = createTimeline({
        delay: 4300,
      });

      // Chain the animations exactly like the snippet pattern
      tl.add(
        Array.from(rows[0].querySelectorAll<HTMLElement>('.slot-char')),
        {
          y: ['-1.75em', '0em'],
          opacity: [0, 1],
          duration: 520,
          delay: stagger(38),
          ease: 'outExpo',
        }
      )
      .add(
        Array.from(rows[1].querySelectorAll<HTMLElement>('.slot-char')),
        {
          y: ['-1.75em', '0em'],
          opacity: [0, 1],
          duration: 520,
          delay: stagger(38),
          ease: 'outExpo',
        },
        '-=280'
      )
      .add(
        Array.from(rows[2].querySelectorAll<HTMLElement>('.slot-char')),
        {
          y: ['-1.75em', '0em'],
          opacity: [0, 1],
          duration: 520,
          delay: stagger(38),
          ease: 'outExpo',
        },
        '-=280'
      )
      .add(
        Array.from(rows[3].querySelectorAll<HTMLElement>('.slot-char')),
        {
          y: ['-1.75em', '0em'],
          opacity: [0, 1],
          duration: 520,
          delay: stagger(38),
          ease: 'outExpo',
        },
        '-=280'
      );
    }

    run();
  }, []);

  return (
    <div ref={containerRef} className="mt-6 grid gap-3">
      {heroStats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-black/50 p-4"
        >
          <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            {item.label}
          </p>

          {/* Overflow-hidden wrapper per character gives the reel/slot visual */}
          <p className="mt-2 text-lg font-semibold text-white">
            <span
              className="slot-row"
              style={{ display: 'inline-flex', flexWrap: 'wrap' }}
            >
              {item.value.split('').map((char, j) => (
                <span
                  key={j}
                  style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    height: '1.45em',
                    lineHeight: '1.45em',
                    verticalAlign: 'bottom',
                  }}
                >
                  <span
                    className="slot-char"
                    style={{
                      display: 'inline-block',
                      whiteSpace: 'pre',
                      opacity: 0,
                    }}
                  >
                    {char}
                  </span>
                </span>
              ))}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
