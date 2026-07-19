import {
  thesisMemoireQuestion,
  thesisMemoireResults,
  thesisMemoireLimit,
  thesisObjectives,
  thesisEvolutionSteps,
  collaborationInterests,
  collaborationDisclaimer,
} from '../../data/thesisEvolution'
import { usePageTitle } from '../../hooks/usePageTitle'

export function ProjetTheseEvolution() {
  usePageTitle('Du mémoire à la thèse')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-muted mb-3">Projet doctoral</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Du mémoire à la thèse</h1>

      <section className="mt-10 rounded-2xl border border-line p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-wide text-muted mb-2">Mémoire</p>
        <blockquote className="text-lg font-medium">« {thesisMemoireQuestion} »</blockquote>
        <p className="mt-4 text-sm font-medium text-muted mb-2">Résultats</p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
          {thesisMemoireResults.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm text-dim">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted shrink-0" aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-amber-800 bg-amber-950/40 p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-wide text-amber-400 mb-2">Limite du mémoire</p>
        <p className="text-sm text-amber-200">{thesisMemoireLimit}</p>
      </section>

      <section className="mt-8 rounded-2xl border-2 border-paper p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-wide text-muted mb-2">Thèse — objectifs</p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
          {thesisObjectives.map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm text-dim">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-paper shrink-0" aria-hidden="true" />
              {o}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Trajectoire</h2>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
          {thesisEvolutionSteps.map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span className="rounded-lg bg-surface px-3 py-1.5 text-sm font-medium">{s}</span>
              {i < thesisEvolutionSteps.length - 1 && <span className="text-muted" aria-hidden="true">→</span>}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-line p-6 sm:p-8">
        <h2 className="text-lg font-semibold mb-2">Opportunité de collaboration avec un équipementier automobile</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {collaborationInterests.map((i) => (
            <li key={i} className="rounded-full border border-line px-3 py-1 text-xs text-dim">
              {i}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted italic">{collaborationDisclaimer}</p>
        <button
          type="button"
          disabled
          className="mt-5 rounded-full border border-line-2 px-5 py-2.5 text-sm font-medium text-muted cursor-not-allowed"
          title="Document PDF à venir"
        >
          Télécharger la synthèse du projet (à venir)
        </button>
      </section>
    </div>
  )
}
