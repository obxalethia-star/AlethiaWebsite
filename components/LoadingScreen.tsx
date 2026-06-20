'use client';

import { useEffect, useRef, useState } from 'react';

const WORD = 'OBXALETHIA';

export function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let cleanup: (() => void) | null = null;

    async function run() {
      const { animate, stagger } = await import('animejs');

      if (!containerRef.current) return;
      const chars = Array.from(
        containerRef.current.querySelectorAll<HTMLSpanElement>('.obx-char')
      );

      // Run one full entrance cycle matching the user's keyframe spec
      const anim = animate(chars, {
        y: [
          { to: '-2.75rem', ease: 'outExpo', duration: 900 },
          // Come down slowly after the spin
          { to: 0, ease: 'inOutQuad', duration: 1200, delay: 150 },
          // Tight, controlled bounce with less shaking
          { to: '-0.3rem', ease: 'outQuad', duration: 150 },
          { to: 0, ease: 'inQuad', duration: 150 }
        ],
        rotate: {
          from: '-1turn',
          to: '0turn',
          duration: 900,
          ease: 'outExpo'
        },
        opacity: [
          { to: 1, duration: 450, ease: 'linear' }
        ],
        delay: stagger(75),
        ease: 'inOutCirc',
      });

      // After the first loop cycle completes, fade the whole screen out
      const totalDuration =
        75 * (chars.length - 1) + // stagger offset for last char
        2550 +                     // total y keyframes duration (900+150+1200+150+150)
        500;                        // slight buffer

      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setVisible(false), 600);
      }, totalDuration);

      cleanup = () => {
        clearTimeout(timer);
        anim.pause();
      };
    }

    run();
    return () => cleanup?.();
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,92,246,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Subtle top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

      {/* Character row */}
      <div
        ref={containerRef}
        aria-label="OBXALETHIA"
        style={{
          display: 'flex',
          gap: '0.05em',
          overflow: 'visible',
        }}
      >
        {WORD.split('').map((char, i) => (
          <span
            key={i}
            className="obx-char"
            style={{
              display: 'inline-block',
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              fontFamily: "'Syne', 'Space Grotesk', sans-serif",
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#ffffff',
              opacity: 0,
              willChange: 'transform, opacity',
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p
        style={{
          marginTop: '1.75rem',
          fontSize: '0.6rem',
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
          color: 'rgba(161,161,170,0.65)',
          fontFamily: "'Inter', sans-serif",
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 0.4s ease',
        }}
      >
        Securing an on-chain future
      </p>
    </div>
  );
}
