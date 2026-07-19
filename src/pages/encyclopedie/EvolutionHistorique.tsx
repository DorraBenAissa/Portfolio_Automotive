import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { timelinePeriods, timelineEntries, disappearedTransformedElements } from '../../data/timeline'
import { oscillationData } from '../../data/oscillation'
import { DataStatusBadge } from '../../components/StatusBadge'
import { ArticleSidebar } from '../../components/ArticleTools'
import { usePageTitle } from '../../hooks/usePageTitle'

const sections = [
  { id: 'frise', label: 'Frise interactive' },
  { id: 'oscillations', label: 'Oscillations' },
  { id: 'elements', label: 'Éléments disparus/transformés' },
]

export function EvolutionHistorique() {
  usePageTitle('Évolution historique')
  const [activePeriod, setActivePeriod] = useState(timelinePeriods[0].id)
  const period = timelinePeriods.find((p) => p.id === activePeriod)!
  const entry = timelineEntries.find((e) => e.periodId === activePeriod)

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <ArticleSidebar sections={sections} pageTitle="L’évolution des tableaux de bord automobiles" />
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Encyclopédie / Évolution</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        L’évolution des tableaux de bord automobiles
      </h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300 max-w-2xl">
        Quatre grandes périodes, de 1898 à 2026, retracent le passage d’une simplicité fonctionnelle et
        visuelle à une richesse technologique dont l’usage n’est pas toujours plus simple.
      </p>
      <Link
        to="/encyclopedie/comparaison"
        className="mt-4 inline-block text-sm font-medium underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900 dark:hover:decoration-white"
      >
        Voir l’analyse comparative des constructeurs →
      </Link>

      <section id="frise" className="mt-12" aria-label="Frise interactive">
        <div className="flex gap-1 rounded-full border border-stone-200 dark:border-stone-800 p-1">
          {timelinePeriods.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePeriod(p.id)}
              className={`flex-1 rounded-full px-3 py-2 text-xs sm:text-sm font-medium transition-colors ${
                activePeriod === p.id
                  ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900'
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              {p.range}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h2 className="text-xl font-semibold">{period.label}</h2>
            <span className="text-sm text-stone-500">{period.range}</span>
          </div>
          <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
            {period.characteristics.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-stone-400 shrink-0" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>

          {entry && (
            <div className="mt-6 pt-6 border-t border-dashed border-stone-300 dark:border-stone-700 flex items-center justify-between">
              <p className="text-sm text-stone-500">Fiche véhicule illustrative de cette période</p>
              <DataStatusBadge status={entry.status} />
            </div>
          )}
        </div>
      </section>

      <section id="oscillations" className="mt-14">
        <h2 className="text-lg font-semibold">Oscillations entre simplicité et complexité</h2>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 mb-6">
          Illustration conceptuelle construite à partir des caractéristiques qualitatives de chaque période —
          il ne s’agit pas d’une mesure chiffrée issue du terrain.
        </p>
        <div className="rounded-2xl border border-stone-200 dark:border-stone-800 p-4 sm:p-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={oscillationData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-stone-200 dark:stroke-stone-800" />
              <XAxis dataKey="period" tick={{ fontSize: 11 }} interval={0} />
              <YAxis domain={[0, 5]} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="simpliciteFonctionnelle" name="Simplicité fonctionnelle" stroke="#0ea5e9" strokeWidth={2} />
              <Line type="monotone" dataKey="complexiteFonctionnelle" name="Complexité fonctionnelle" stroke="#f97316" strokeWidth={2} />
              <Line type="monotone" dataKey="simpliciteVisuelle" name="Simplicité visuelle" stroke="#22c55e" strokeWidth={2} />
              <Line type="monotone" dataKey="complexiteUsage" name="Complexité d’usage" stroke="#e11d48" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-stone-400 mt-2">Recherche et analyse : Dorra Ben Aissa</p>
      </section>

      <section id="elements" className="mt-14">
        <h2 className="text-lg font-semibold mb-4">Éléments disparus, transformés ou réapparus</h2>
        <ul className="space-y-2">
          {disappearedTransformedElements.map((el) => (
            <li key={el} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
              <span aria-hidden="true">↺</span>
              {el}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
