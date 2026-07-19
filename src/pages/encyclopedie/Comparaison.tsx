import { Link } from 'react-router-dom'
import { manufacturerAnalyses, manufacturerAnalysisDisclaimer } from '../../data/manufacturers'
import { usePageTitle } from '../../hooks/usePageTitle'

export function Comparaison() {
  usePageTitle('Comparaison constructeurs')
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Encyclopédie / Comparaison</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        Analyse comparative des stratégies constructeurs
      </h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300 max-w-2xl">
        Une lecture stratégique — au-delà d’un simple tableau de scores — des approches UX adoptées par
        six constructeurs face à la tension entre simplicité, richesse fonctionnelle et sécurité.
      </p>
      <Link
        to="/encyclopedie/evolution"
        className="mt-4 inline-block text-sm font-medium underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900 dark:hover:decoration-white"
      >
        ← Voir l’évolution historique des tableaux de bord
      </Link>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        {manufacturerAnalyses.map((m) => (
          <div key={m.id} className="rounded-2xl border border-stone-200 dark:border-stone-800 p-5">
            <h2 className="font-semibold mb-3">{m.name}</h2>
            <ul className="space-y-1.5">
              {m.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-stone-600 dark:text-stone-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-stone-400 shrink-0" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 p-5">
        <p className="text-sm text-amber-900 dark:text-amber-200">{manufacturerAnalysisDisclaimer}</p>
      </div>
    </div>
  )
}
