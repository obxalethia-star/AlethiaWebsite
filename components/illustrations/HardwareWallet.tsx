export function HardwareWalletArt() {
  return (
    <svg viewBox="0 0 360 260" className="h-auto w-full" role="img" aria-label="Schematic of the Alethia hardware signing key">
      <rect x="0.5" y="0.5" width="359" height="259" fill="none" stroke="var(--color-line)" strokeWidth="1" />
      {/* blueprint corner ticks */}
      {[
        [10, 10, 26, 10, 10, 26],
        [350, 10, 334, 10, 350, 26],
        [10, 250, 26, 250, 10, 234],
        [350, 250, 334, 250, 350, 234]
      ].map((p, i) => (
        <g key={i} stroke="var(--color-ink-faint)" strokeWidth="1">
          <line x1={p[0]} y1={p[1]} x2={p[2]} y2={p[3]} />
          <line x1={p[0]} y1={p[1]} x2={p[4]} y2={p[5]} />
        </g>
      ))}

      {/* device body */}
      <rect x="130" y="45" width="100" height="170" rx="10" fill="var(--color-surface-raised)" stroke="var(--color-ink-faint)" strokeWidth="1.25" />
      {/* screen */}
      <rect x="144" y="64" width="72" height="52" rx="3" fill="var(--color-bg)" stroke="var(--color-accent)" strokeWidth="1.25" />
      <path d="M170 84 L177 92 L192 76" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* side button */}
      <rect x="226" y="96" width="6" height="22" rx="2" fill="var(--color-ink-faint)" />
      {/* nav dots */}
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={168 + i * 12} cy={132} r="2.5" fill="var(--color-ink-faint)" />
      ))}
      {/* port */}
      <rect x="168" y="196" width="24" height="6" rx="2" fill="var(--color-bg)" stroke="var(--color-ink-faint)" strokeWidth="1" />

      {/* callouts */}
      <g stroke="var(--color-line)" strokeWidth="1">
        <line x1="130" y1="45" x2="70" y2="45" />
        <line x1="230" y1="45" x2="290" y2="45" />
      </g>
      <text x="20" y="41" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-ink-faint)" letterSpacing="0.5">
        offline_signer
      </text>
      <text x="234" y="41" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-ink-faint)" letterSpacing="0.5">
        rev_a · 2027
      </text>
      <text x="144" y="230" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-ink-faint)" letterSpacing="0.5">
        no seed leaves device
      </text>
    </svg>
  );
}
