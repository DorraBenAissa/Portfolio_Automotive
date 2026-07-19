import { surveyResults, whatDriversAskFor } from '../../data/surveyResults'
import { DataStatusBadge } from '../../components/StatusBadge'
import { usePageTitle } from '../../hooks/usePageTitle'

const headlineStat = surveyResults.find((r) => r.id === 'urgence-masquage')!
const otherResults = surveyResults.filter((r) => r.id !== 'urgence-masquage')

export function ResultatsConducteurs() {
  usePageTitle('Résultats conducteurs')
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Recherche / Résultats conducteurs</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Résultats du questionnaire conducteurs</h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300 max-w-2xl">
        Perceptions, préférences et attentes recueillies auprès des conducteurs interrogés. Les valeurs non
        encore intégrées depuis le mémoire sont explicitement marquées « à compléter », plutôt qu’estimées.
      </p>

      <section className="mt-10 rounded-2xl border-2 border-stone-900 dark:border-white p-6 sm:p-10 text-center">
        <p className="text-5xl sm:text-6xl font-semibold tracking-tight">{headlineStat.value}%</p>
        <p className="mt-3 text-base sm:text-lg font-medium max-w-xl mx-auto">{headlineStat.question}</p>
        <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">{headlineStat.note}</p>
        <div className="mt-4 flex justify-center">
          <DataStatusBadge status={headlineStat.status} />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Autres catégories du questionnaire</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {otherResults.map((r) => (
            <div key={r.id} className="rounded-xl border border-stone-200 dark:border-stone-800 p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-sm">{r.category}</h3>
                <DataStatusBadge status={r.status} />
              </div>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">{r.question}</p>
              <p className="mt-3 text-2xl font-semibold text-stone-300 dark:text-stone-700">
                {r.value != null ? `${r.value}${r.unit ?? ''}` : '—'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-4">Ce que les conducteurs demandent</h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {whatDriversAskFor.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-stone-400 shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
