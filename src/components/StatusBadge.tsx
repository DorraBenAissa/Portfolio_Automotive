import type { HypothesisStatus } from '../types/hypothesis'

const config: Record<HypothesisStatus, { symbol: string; classes: string }> = {
  validée: { symbol: '✓', classes: 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800' },
  'partiellement validée': { symbol: '◐', classes: 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800' },
  'non validée': { symbol: '✕', classes: 'bg-rose-50 text-rose-800 border-rose-300 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800' },
  'à approfondir': { symbol: '?', classes: 'bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-900 dark:text-stone-300 dark:border-stone-700' },
}

export function StatusBadge({ status }: { status: HypothesisStatus }) {
  const c = config[status]
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${c.classes}`}>
      <span aria-hidden="true">{c.symbol}</span>
      {status}
    </span>
  )
}

export function DataStatusBadge({ status }: { status: 'confirmé' | 'à compléter depuis le mémoire' | 'brouillon' | 'publié' }) {
  const isConfirmed = status === 'confirmé' || status === 'publié'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium ${
        isConfirmed
          ? 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800'
          : 'bg-stone-100 text-stone-600 border-stone-300 dark:bg-stone-900 dark:text-stone-400 dark:border-stone-700'
      }`}
    >
      <span aria-hidden="true">{isConfirmed ? '✓' : '○'}</span>
      {status}
    </span>
  )
}
