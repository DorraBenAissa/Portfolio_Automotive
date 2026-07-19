import {
  methodologyDiagram,
  dataSources,
  triangulationExplanation,
  positioning,
  methodologicalLimits,
} from '../../data/methodology'
import { annexes } from '../../data/annexes'
import { ArticleSidebar } from '../../components/ArticleTools'
import { usePageTitle } from '../../hooks/usePageTitle'

const sections = [
  { id: 'diagramme', label: 'Diagramme méthodologique' },
  { id: 'sources', label: 'Sources de données' },
  { id: 'triangulation', label: 'Triangulation' },
  { id: 'positionnement', label: 'Positionnement' },
  { id: 'limites', label: 'Limites méthodologiques' },
  { id: 'annexes', label: 'Annexes' },
]

export function Methodologie() {
  usePageTitle('Méthodologie')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <ArticleSidebar sections={sections} pageTitle="Méthodologie" />
      <p className="text-sm font-medium text-muted mb-3">Recherche / Méthodologie</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Méthodologie</h1>
      <p className="mt-4 text-dim">
        La recherche suit une démarche mixte et exploratoire, articulant théorie, analyse historique,
        benchmark constructeurs, données quantitatives et qualitatives.
      </p>

      <section id="diagramme" className="mt-12">
        <h2 className="text-lg font-semibold mb-6">Diagramme méthodologique</h2>
        <ol className="relative border-l border-line pl-6 space-y-6">
          {methodologyDiagram.map((step) => (
            <li key={step.id} className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-paper" aria-hidden="true" />
              <p className="text-xs text-muted">{String(step.order).padStart(2, '0')}</p>
              <h3 className="font-medium">{step.label}</h3>
              <p className="text-sm text-dim">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="sources" className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Trois sources principales de données</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {dataSources.map((s, i) => (
            <div key={s.id} className="rounded-2xl border border-line p-5">
              <p className="text-xs text-muted mb-1">{i + 1}</p>
              <h3 className="font-medium mb-2">{s.title}</h3>
              <p className="text-sm text-dim">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="triangulation" className="mt-14 rounded-2xl border border-paper p-6 sm:p-8">
        <h2 className="text-lg font-semibold mb-2">Triangulation</h2>
        <p className="text-sm text-dim">{triangulationExplanation}</p>
      </section>

      <section id="positionnement" className="mt-14">
        <h2 className="text-lg font-semibold mb-4">Positionnement</h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
          {positioning.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-dim">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted shrink-0" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section id="limites" className="mt-14 rounded-2xl border border-amber-800 bg-amber-950/40 p-6 sm:p-8">
        <h2 className="text-lg font-semibold mb-4">Limites méthodologiques</h2>
        <ul className="space-y-2">
          {methodologicalLimits.map((l) => (
            <li key={l} className="flex items-start gap-2 text-sm text-dim">
              <span aria-hidden="true">–</span>
              {l}
            </li>
          ))}
        </ul>
      </section>

      <section id="annexes" className="mt-14">
        <h2 className="text-lg font-semibold mb-2">Annexes</h2>
        <p className="text-sm text-muted mb-6">
          Documents sources du mémoire (benchmark, questionnaires, guides d’entretien, analyses) consultables sur Figma.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {annexes.map((a) => (
            <a
              key={a.id}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-3 rounded-xl border border-line p-4 hover:border-line-2 transition-colors"
            >
              <span>
                <span className="text-xs font-medium text-muted">Annexe {a.number}</span>
                <span className="block text-sm mt-0.5">{a.title}</span>
              </span>
              <span className="shrink-0 text-muted" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
