import {
  methodologyDiagram,
  dataSources,
  triangulationExplanation,
  positioning,
  methodologicalLimits,
} from '../../data/methodology'
import { ArticleSidebar } from '../../components/ArticleTools'
import { usePageTitle } from '../../hooks/usePageTitle'

const sections = [
  { id: 'diagramme', label: 'Diagramme méthodologique' },
  { id: 'sources', label: 'Sources de données' },
  { id: 'triangulation', label: 'Triangulation' },
  { id: 'positionnement', label: 'Positionnement' },
  { id: 'limites', label: 'Limites méthodologiques' },
]

export function Methodologie() {
  usePageTitle('Méthodologie')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <ArticleSidebar sections={sections} pageTitle="Méthodologie" />
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Recherche / Méthodologie</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Méthodologie</h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300">
        La recherche suit une démarche mixte et exploratoire, articulant théorie, analyse historique,
        benchmark constructeurs, données quantitatives et qualitatives.
      </p>

      <section id="diagramme" className="mt-12">
        <h2 className="text-lg font-semibold mb-6">Diagramme méthodologique</h2>
        <ol className="relative border-l border-stone-200 dark:border-stone-800 pl-6 space-y-6">
          {methodologyDiagram.map((step) => (
            <li key={step.id} className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-stone-900 dark:bg-white" aria-hidden="true" />
              <p className="text-xs text-stone-400">{String(step.order).padStart(2, '0')}</p>
              <h3 className="font-medium">{step.label}</h3>
              <p className="text-sm text-stone-600 dark:text-stone-300">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="sources" className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Trois sources principales de données</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {dataSources.map((s, i) => (
            <div key={s.id} className="rounded-2xl border border-stone-200 dark:border-stone-800 p-5">
              <p className="text-xs text-stone-400 mb-1">{i + 1}</p>
              <h3 className="font-medium mb-2">{s.title}</h3>
              <p className="text-sm text-stone-600 dark:text-stone-300">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="triangulation" className="mt-14 rounded-2xl border border-stone-900 dark:border-white p-6 sm:p-8">
        <h2 className="text-lg font-semibold mb-2">Triangulation</h2>
        <p className="text-sm text-stone-700 dark:text-stone-300">{triangulationExplanation}</p>
      </section>

      <section id="positionnement" className="mt-14">
        <h2 className="text-lg font-semibold mb-4">Positionnement</h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {positioning.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-stone-400 shrink-0" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section id="limites" className="mt-14 rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 p-6 sm:p-8">
        <h2 className="text-lg font-semibold mb-4">Limites méthodologiques</h2>
        <ul className="space-y-2">
          {methodologicalLimits.map((l) => (
            <li key={l} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
              <span aria-hidden="true">–</span>
              {l}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
