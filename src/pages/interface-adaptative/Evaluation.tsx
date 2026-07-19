import { strengths, limitations, evaluationPerspectives } from '../../data/evaluationCriteria'

export function Evaluation() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Interface adaptative / Évaluation</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Évaluation critique</h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300 max-w-2xl">
        Une lecture équilibrée des forces et des limites du concept, ainsi qu’un protocole de perspectives
        d’évaluation pour les prochaines étapes de la recherche.
      </p>

      <section className="mt-10">
        <h2 className="text-lg font-semibold mb-4 text-emerald-700 dark:text-emerald-400">Forces</h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {strengths.map((s) => (
            <li key={s.id} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
              <span className="text-emerald-600 dark:text-emerald-400 mt-0.5" aria-hidden="true">✓</span>
              {s.label}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold mb-4 text-rose-700 dark:text-rose-400">Limites</h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {limitations.map((l) => (
            <li key={l.id} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
              <span className="text-rose-600 dark:text-rose-400 mt-0.5" aria-hidden="true">–</span>
              {l.label}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-semibold mb-4">Perspectives d’évaluation</h2>
        <div className="rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
          <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
            Protocole envisagé pour une prochaine phase d’expérimentation :
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
            {evaluationPerspectives.map((p) => (
              <li key={p.id} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-stone-400 shrink-0" aria-hidden="true" />
                {p.label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
