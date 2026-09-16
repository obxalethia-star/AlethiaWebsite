const CAPITAL_UTILISATION = [
  { label: 'Deployed', value: 54 },
  { label: 'Escrow-held', value: 31 },
  { label: 'Reserved', value: 15 }
];

const SECTOR_ALLOCATION = [
  { label: 'Mining & energy', value: 32 },
  { label: 'Real estate', value: 24 },
  { label: 'Agriculture', value: 19 },
  { label: 'Private equity', value: 15 },
  { label: 'Other', value: 10 }
];

function BarList({ data }: { data: { label: string; value: number }[] }) {
  return (
    <div className="flex flex-col gap-3">
      {data.map((row) => (
        <div key={row.label} className="grid grid-cols-[1fr_auto] items-center gap-3 font-mono text-[11px]">
          <span className="text-ink-muted">{row.label}</span>
          <span className="font-tabular text-ink-faint">{row.value}%</span>
          <div className="col-span-2 h-1.5 w-full bg-line-soft">
            <div className="h-full bg-accent" style={{ width: `${row.value}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function SandboxCharts() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="border border-line bg-bg p-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">Capital utilisation — sandbox</p>
        <div className="mt-4">
          <BarList data={CAPITAL_UTILISATION} />
        </div>
      </div>
      <div className="border border-line bg-bg p-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">Sector allocation — sandbox</p>
        <div className="mt-4">
          <BarList data={SECTOR_ALLOCATION} />
        </div>
      </div>
    </div>
  );
}
