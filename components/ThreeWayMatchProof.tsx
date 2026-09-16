'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CheckCircle2, Play, XCircle } from 'lucide-react';

type ScenarioKey = 'match' | 'break';

type Row = { label: string; po: string; gr: string; invoice: string; ok: boolean };

type Scenario = {
  tabLabel: string;
  po: { qty: string; price: string; total: string };
  gr: { qty: string };
  invoice: { qty: string; total: string };
  rows: Row[];
  outcome: 'match' | 'break';
  outcomeDetail: string;
};

const SCENARIOS: Record<ScenarioKey, Scenario> = {
  match: {
    tabLabel: 'Clean match',
    po: { qty: '1,200 units', price: 'R401.67 / unit', total: 'R482,000' },
    gr: { qty: '1,200 units confirmed' },
    invoice: { qty: '1,200 units billed', total: 'R482,000' },
    rows: [
      { label: 'Quantity', po: '1,200u', gr: '1,200u', invoice: '1,200u', ok: true },
      { label: 'Unit price', po: 'R401.67', gr: '—', invoice: 'R401.67', ok: true },
      { label: 'Total', po: 'R482,000', gr: '—', invoice: 'R482,000', ok: true }
    ],
    outcome: 'match',
    outcomeDetail: 'All three documents agree. Payment releases instantly — no manual review queue.'
  },
  break: {
    tabLabel: 'Quantity exception',
    po: { qty: '1,200 units', price: 'R401.67 / unit', total: 'R482,000' },
    gr: { qty: '1,140 units confirmed' },
    invoice: { qty: '1,200 units billed', total: 'R482,000' },
    rows: [
      { label: 'Quantity', po: '1,200u', gr: '1,140u', invoice: '1,200u', ok: false },
      { label: 'Unit price', po: 'R401.67', gr: '—', invoice: 'R401.67', ok: true },
      { label: 'Total', po: 'R482,000', gr: '—', invoice: 'R482,000', ok: true }
    ],
    outcome: 'break',
    outcomeDetail: 'Goods receipt shows 60 fewer units than were billed. Cash is held and the exception routes for review.'
  }
};

const STEP_DELAY_MS = 650;

export function ThreeWayMatchProof() {
  const reduceMotion = useReducedMotion();
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>('match');
  const [step, setStep] = useState(3);
  const [running, setRunning] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const scenario = SCENARIOS[scenarioKey];

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const runSequence = useCallback(() => {
    clearTimers();
    if (reduceMotion) {
      setStep(3);
      return;
    }
    setRunning(true);
    setStep(0);
    [1, 2, 3].forEach((target, i) => {
      timers.current.push(
        setTimeout(() => {
          setStep(target);
          if (target === 3) setRunning(false);
        }, STEP_DELAY_MS * (i + 1))
      );
    });
  }, [clearTimers, reduceMotion]);

  function selectScenario(key: ScenarioKey) {
    clearTimers();
    setRunning(false);
    setScenarioKey(key);
    setStep(3);
  }

  useEffect(() => clearTimers, [clearTimers]);

  const docs = [
    { key: 'po', title: 'Purchase order', lines: [scenario.po.qty, scenario.po.price, scenario.po.total] },
    { key: 'gr', title: 'Goods receipt', lines: [scenario.gr.qty] },
    { key: 'invoice', title: 'Vendor invoice', lines: [scenario.invoice.qty, scenario.invoice.total] }
  ];

  return (
    <div className="border border-line bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-5 py-4 md:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">03_three_way_match.log</p>
        <div className="flex items-center gap-2">
          {(Object.keys(SCENARIOS) as ScenarioKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => selectScenario(key)}
              aria-pressed={scenarioKey === key}
              className={`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] transition-colors ${
                scenarioKey === key
                  ? 'border-accent text-accent'
                  : 'border-line text-ink-muted hover:border-ink-faint hover:text-ink'
              }`}
            >
              {SCENARIOS[key].tabLabel}
            </button>
          ))}
          <button
            type="button"
            onClick={runSequence}
            disabled={running}
            className="inline-flex items-center gap-1.5 bg-accent px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-on-accent disabled:opacity-50"
          >
            <Play className="h-3 w-3" /> Run match
          </button>
        </div>
      </div>

      <div className="grid gap-0 p-5 md:p-6">
        <div className="grid gap-3 sm:grid-cols-3">
          {docs.map((doc, i) => (
            <motion.div
              key={doc.key}
              initial={false}
              animate={{
                opacity: step >= 1 || i === 0 ? 1 : 0.35,
                borderColor: step >= 1 ? 'var(--color-accent)' : 'var(--color-line)'
              }}
              transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : i * 0.12 }}
              className="border bg-bg p-4 font-mono text-[12px]"
            >
              <p className="font-body text-sm font-medium text-ink">{doc.title}</p>
              <div className="mt-2 flex flex-col gap-1 text-ink-muted">
                {doc.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="my-4 flex justify-center text-accent" aria-hidden="true">
          <motion.span
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            className="font-mono text-lg"
          >
            ↓
          </motion.span>
        </div>

        <div className="border border-accent bg-accent-soft p-4 md:p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">[ match_engine ]</p>
          <div className="mt-3 flex flex-col gap-2">
            {scenario.rows.map((row, i) => (
              <AnimatePresence key={row.label} mode="popLayout">
                {step >= 2 && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.25, delay: reduceMotion ? 0 : i * 0.15 }}
                    className="grid grid-cols-[1fr_auto_auto_auto_auto] items-center gap-3 border-b border-line-soft py-2 font-mono text-[12px] last:border-0 sm:grid-cols-[100px_1fr_1fr_1fr_auto]"
                  >
                    <span className="text-ink-faint">{row.label}</span>
                    <span className="font-tabular text-ink-muted">{row.po}</span>
                    <span className="font-tabular text-ink-muted">{row.gr}</span>
                    <span className="font-tabular text-ink-muted">{row.invoice}</span>
                    {row.ok ? (
                      <CheckCircle2 className="h-4 w-4 justify-self-end text-match" />
                    ) : (
                      <XCircle className="h-4 w-4 justify-self-end text-break" />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step >= 3 && (
            <motion.div
              key={scenario.outcome}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
              className={`mt-4 border p-4 md:p-5 ${
                scenario.outcome === 'match' ? 'border-match bg-match-soft' : 'border-break bg-break-soft'
              }`}
            >
              <p
                className={`font-mono text-[12px] font-medium uppercase tracking-[0.08em] ${
                  scenario.outcome === 'match' ? 'text-match' : 'text-break'
                }`}
              >
                {scenario.outcome === 'match' ? 'MATCH → release payment' : 'BREAK → hold cash'}
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{scenario.outcomeDetail}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
