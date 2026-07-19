import { hypotheses, hypothesesSynthesisNote } from '../../data/hypotheses'
import { StatusBadge } from '../../components/StatusBadge'
import { usePageTitle } from '../../hooks/usePageTitle'

export function Hypotheses() {
  usePageTitle('Hypothèses et validation')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Recherche / Hypothèses</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Hypothèses et validation</h1>

      <div className="mt-6 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 p-5 text-sm text-emerald-900 dark:text-emerald-200">
        {hypothesesSynthesisNote}
      </div>

      <div className="mt-10 space-y-6">
        {hypotheses.map((h) => (
          <article key={h.id} className="rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <h2 className="font-semibold text-lg">{h.label}</h2>
              <StatusBadge status={h.status} />
            </div>
            <p className="mt-3 text-sm text-stone-700 dark:text-stone-300">{h.formulation}</p>

            <dl className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <dt className="font-medium text-stone-500 dark:text-stone-400 mb-1">Données mobilisées</dt>
                <dd className="text-stone-700 dark:text-stone-300">{h.dataUsed.join(', ')}</dd>
              </div>
              <div>
                <dt className="font-medium text-stone-500 dark:text-stone-400 mb-1">Résultat</dt>
                <dd className="text-stone-700 dark:text-stone-300">{h.result}</dd>
              </div>
              <div>
                <dt className="font-medium text-stone-500 dark:text-stone-400 mb-1">Limites</dt>
                <dd className="text-stone-700 dark:text-stone-300">{h.limits.join(', ')}</dd>
              </div>
              <div>
                <dt className="font-medium text-stone-500 dark:text-stone-400 mb-1">Perspectives</dt>
                <dd className="text-stone-700 dark:text-stone-300">{h.perspectives.join(', ')}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  )
}
