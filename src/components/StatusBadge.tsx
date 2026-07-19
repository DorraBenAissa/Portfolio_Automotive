import type { HypothesisStatus } from '../types/hypothesis'

const config: Record<HypothesisStatus, { symbol: string; classes: string }> = {
  validée: { symbol: '✓', classes: 'bg-emerald-950 text-emerald-300 border-emerald-800' },
  'partiellement validée': { symbol: '◐', classes: 'bg-amber-950 text-amber-300 border-amber-800' },
  'non validée': { symbol: '✕', classes: 'bg-rose-950 text-rose-300 border-rose-800' },
  'à approfondir': { symbol: '?', classes: 'bg-surface text-dim border-line-2' },
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
          ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
          : 'bg-surface text-muted border-line-2'
      }`}
    >
      <span aria-hidden="true">{isConfirmed ? '✓' : '○'}</span>
      {status}
    </span>
  )
}
