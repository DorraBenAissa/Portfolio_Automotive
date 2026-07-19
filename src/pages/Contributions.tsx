import { contributionsChronology, contributionsList } from '../data/thesisEvolution'
import { usePageTitle } from '../hooks/usePageTitle'

export function Contributions() {
  usePageTitle('Contributions personnelles')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-muted mb-3">Contributions</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contributions personnelles</h1>
      <p className="mt-4 text-dim max-w-2xl">
        L’ensemble de la recherche, de l’analyse et de la conception présentées sur cette plateforme a été
        mené par une seule personne.
      </p>

      <div className="mt-6 rounded-xl border-2 border-paper p-5 text-center font-medium">
        Recherche, analyse et conception : Dorra Ben Aissa
      </div>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Chronologie</h2>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
          {contributionsChronology.map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span className="rounded-lg bg-surface px-3 py-1.5 text-sm font-medium">{s}</span>
              {i < contributionsChronology.length - 1 && <span className="text-muted" aria-hidden="true">→</span>}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Réalisations</h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {contributionsList.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-dim">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted shrink-0" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
