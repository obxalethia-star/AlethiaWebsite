export function CardVisual() {
  return (
    <svg viewBox="0 0 360 230" className="h-auto w-full" role="img" aria-label="Schematic of the Alethia settlement card">
      <rect x="0.5" y="0.5" width="359" height="229" fill="none" stroke="var(--color-line)" strokeWidth="1" />
      {[
        [10, 10, 26, 10, 10, 26],
        [350, 10, 334, 10, 350, 26],
        [10, 220, 26, 220, 10, 204],
        [350, 220, 334, 220, 350, 204]
      ].map((p, i) => (
        <g key={i} stroke="var(--color-ink-faint)" strokeWidth="1">
          <line x1={p[0]} y1={p[1]} x2={p[2]} y2={p[3]} />
          <line x1={p[0]} y1={p[1]} x2={p[4]} y2={p[5]} />
        </g>
      ))}

      {/* card body */}
      <rect x="50" y="38" width="260" height="154" rx="12" fill="var(--color-surface-raised)" stroke="var(--color-ink-faint)" strokeWidth="1.25" />
      {/* chip */}
      <rect x="74" y="66" width="34" height="26" rx="4" fill="var(--color-accent-soft)" stroke="var(--color-accent)" strokeWidth="1.25" />
      <line x1="74" y1="79" x2="108" y2="79" stroke="var(--color-accent)" strokeWidth="1" />
      <line x1="91" y1="66" x2="91" y2="92" stroke="var(--color-accent)" strokeWidth="1" />

      {/* settlement mark */}
      <circle cx="264" cy="79" r="16" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
      <circle cx="278" cy="79" r="16" fill="none" stroke="var(--color-ink-faint)" strokeWidth="1.5" />

      {/* number */}
      <g fill="var(--color-ink-muted)" fontFamily="var(--font-mono)" fontSize="13" letterSpacing="3">
        <text x="74" y="130">4721 •••• •••• 0058</text>
      </g>
      <text x="74" y="164" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-ink-faint)" letterSpacing="1.5">
        OBX ALETHIA SETTLEMENT
      </text>
      <text x="270" y="164" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-ink-faint)" letterSpacing="1">
        THRU 12/30
      </text>

      <text x="122" y="26" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-ink-faint)" letterSpacing="0.5">
        multi-asset settlement card · concept
      </text>
    </svg>
  );
}
