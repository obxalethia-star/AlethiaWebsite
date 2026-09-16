import { roadmap } from '@/lib/content/roadmap';

const STATUS_STYLE: Record<string, string> = {
  live: 'text-match border-match',
  next: 'text-accent border-accent',
  later: 'text-ink-muted border-line',
  horizon: 'text-ink-faint border-line'
};

export function RoadmapTimeline() {
  return (
    <ol className="grid gap-0 divide-y divide-line border border-line">
      {roadmap.map((item, i) => (
        <li key={item.title} className="grid grid-cols-[auto_1fr] gap-4 p-5 sm:grid-cols-[120px_auto_1fr] sm:items-baseline md:p-6">
          <span
            className={`inline-flex w-fit items-center border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] ${STATUS_STYLE[item.status]}`}
          >
            {item.stage}
          </span>
          <span className="hidden font-mono text-[11px] text-ink-faint sm:block">{String(i + 1).padStart(2, '0')}</span>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-display text-lg font-medium text-ink">{item.title}</h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-ink-muted">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
