import { discussionConclusions, confrontationSteps } from '../../data/discussion'
import { ArticleSidebar } from '../../components/ArticleTools'
import { usePageTitle } from '../../hooks/usePageTitle'

const sections = [
  { id: 'matrice', label: 'Matrice de confrontation' },
  { id: 'conclusions', label: 'Principales conclusions' },
]

export function Discussion() {
  usePageTitle('Discussion')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <ArticleSidebar sections={sections} pageTitle="Discussion des résultats" />
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Recherche / Discussion</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Discussion des résultats</h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300">
        Cette page confronte la théorie, l’évolution historique, le benchmark constructeurs, les résultats
        conducteurs et les avis des experts, pour en dégager les implications pour la conception.
      </p>

      <section id="matrice" className="mt-10" aria-label="Matrice de confrontation">
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-stone-200 dark:border-stone-800 p-5">
          {confrontationSteps.map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span className="rounded-lg bg-stone-100 dark:bg-stone-800 px-3 py-1.5 text-sm font-medium">{s}</span>
              {i < confrontationSteps.length - 1 && <span className="text-stone-400" aria-hidden="true">→</span>}
            </span>
          ))}
        </div>
      </section>

      <section id="conclusions" className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Principales conclusions</h2>
        <ol className="space-y-4">
          {discussionConclusions.map((c, i) => (
            <li key={c} className="flex gap-4 rounded-xl border border-stone-200 dark:border-stone-800 p-4">
              <span className="shrink-0 h-7 w-7 rounded-full bg-stone-900 text-white dark:bg-white dark:text-stone-900 text-xs font-medium flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-sm text-stone-700 dark:text-stone-300">{c}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
