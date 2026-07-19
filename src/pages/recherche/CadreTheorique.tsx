import {
  theoreticalConcepts,
  simplicityComparison,
  appliedDefinition,
  perceptionActionChain,
  cognitiveLoadImpacts,
  visualVsUsageSimplicity,
} from '../../data/theoreticalConcepts'
import { ResearchOnly } from '../../context/ViewModeContext'
import { SourceReference } from '../../components/SourceReference'
import { ArticleSidebar } from '../../components/ArticleTools'
import { usePageTitle } from '../../hooks/usePageTitle'

const sections = [
  { id: 'concepts-mobilises', label: 'Concepts mobilisés' },
  { id: 'simplicite-complexite-simplexite', label: 'Simplicité / complexité / simplexité' },
  { id: 'perception-action', label: 'Perception → action' },
  { id: 'simplicite-visuelle', label: 'Simplicité visuelle ≠ usage' },
]

export function CadreTheorique() {
  usePageTitle('Cadre théorique')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <ArticleSidebar sections={sections} pageTitle="Cadre théorique" />
      <p className="text-sm font-medium text-muted mb-3">Recherche / Cadre théorique</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Cadre théorique</h1>
      <p className="mt-4 text-dim">
        Le projet articule des concepts issus des sciences cognitives, de l’ergonomie et de l’interaction
        homme-machine pour comprendre comment un conducteur perçoit, traite et agit face à l’information
        présentée par le véhicule.
      </p>

      <ResearchOnly>
        <section id="concepts-mobilises" className="mt-10" aria-label="Glossaire des concepts mobilisés">
          <h2 className="text-lg font-semibold mb-4">Concepts mobilisés</h2>
          <div className="flex flex-wrap gap-2">
            {theoreticalConcepts.map((c) => (
              <span
                key={c.id}
                className="rounded-full border border-line px-3 py-1 text-sm text-dim"
              >
                {c.term}
              </span>
            ))}
          </div>
        </section>
      </ResearchOnly>

      <section id="simplicite-complexite-simplexite" className="mt-14">
        <h2 className="text-lg font-semibold mb-2">Simplicité, complexité, simplexité</h2>
        <p className="text-sm text-muted mb-6">Comparaison visuelle des trois notions.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {simplicityComparison.map((col) => (
            <div
              key={col.id}
              className={`rounded-2xl border p-5 ${
                col.id === 'simplexite'
                  ? 'border-paper bg-surface'
                  : 'border-line'
              }`}
            >
              <h3 className="font-medium mb-3">{col.title}</h3>
              <ul className="space-y-1.5">
                {col.points.map((p) => (
                  <li key={p} className="text-sm text-dim flex gap-2">
                    <span aria-hidden="true">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <blockquote className="mt-8 border-l-4 border-paper pl-5 py-1 text-base sm:text-lg font-medium">
          « {appliedDefinition} »
        </blockquote>
        <SourceReference source="Mémoire de Master 2" title="La simplexité dans les interfaces automobiles" author="Dorra Ben Aissa" year={2026} page={null} type="proposition" />
      </section>

      <section id="perception-action" className="mt-14">
        <h2 className="text-lg font-semibold mb-6">De la perception à l’action</h2>
        <div className="rounded-2xl border border-line p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
            {perceptionActionChain.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-lg bg-surface px-3 py-1.5 text-sm font-medium">
                  {step}
                </span>
                {i < perceptionActionChain.length - 1 && (
                  <span className="text-muted" aria-hidden="true">→</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-dashed border-line-2">
            <p className="text-sm font-medium text-muted mb-3">
              Couche transversale : charge cognitive
            </p>
            <div className="h-2 rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-500" aria-hidden="true" />
            <p className="mt-3 text-sm text-dim">
              La qualité de l’interface influence directement :
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {cognitiveLoadImpacts.map((impact) => (
                <li
                  key={impact}
                  className="rounded-full border border-line px-3 py-1 text-xs text-dim"
                >
                  {impact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="simplicite-visuelle" className="mt-14 rounded-2xl border border-amber-800 bg-amber-950/40 p-6 sm:p-8">
        <h2 className="text-lg font-semibold">{visualVsUsageSimplicity.title}</h2>
        <p className="mt-2 text-sm text-dim">{visualVsUsageSimplicity.explanation}</p>
      </section>
    </div>
  )
}
