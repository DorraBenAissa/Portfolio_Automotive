import { dashboardMetrics } from '../data/bibliography'
import { manufacturerAnalyses } from '../data/manufacturers'
import { timelinePeriods } from '../data/timeline'
import { drivingScenarios } from '../data/workflows'
import { usePageTitle } from '../hooks/usePageTitle'

const metricCards: { label: string; value: number | string | null }[] = [
  { label: 'Véhicules étudiés', value: dashboardMetrics.vehiculesEtudies },
  { label: 'Périodes couvertes', value: dashboardMetrics.periodesCouvertes },
  { label: 'Constructeurs comparés', value: dashboardMetrics.constructeursCompares },
  { label: 'Dimensions UX', value: dashboardMetrics.dimensionsUx },
  { label: 'Participants questionnaire', value: dashboardMetrics.participantsQuestionnaire },
  { label: 'Experts interrogés', value: dashboardMetrics.expertsInterroges },
  { label: 'Scénarios adaptatifs', value: dashboardMetrics.scenariosAdaptatifs },
  { label: 'Recommandations', value: dashboardMetrics.recommandations },
  { label: 'Sources', value: dashboardMetrics.sources },
]

export function DashboardRecherche() {
  usePageTitle('Dashboard recherche')
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-muted mb-3">Dashboard recherche</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Tableau de bord de recherche</h1>
      <p className="mt-4 text-dim max-w-2xl">
        Un aperçu chiffré de l’état d’avancement du projet. Les valeurs non confirmées depuis le mémoire
        restent explicitement vides plutôt qu’estimées.
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {metricCards.map((m) => (
          <div key={m.label} className="rounded-2xl border border-line p-5 text-center">
            <p className="text-3xl font-semibold">{m.value ?? '—'}</p>
            <p className="mt-1 text-xs text-muted">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-line p-5 flex items-center justify-between">
        <p className="text-sm text-dim">Avancement du projet doctoral</p>
        <span className="text-sm font-medium text-muted">{dashboardMetrics.avancementProjetDoctoral}</span>
      </div>

      <section className="mt-14 grid sm:grid-cols-2 gap-8">
        <div>
          <h2 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
            Périodes historiques couvertes
          </h2>
          <ul className="space-y-1.5">
            {timelinePeriods.map((p) => (
              <li key={p.id} className="text-sm text-dim">{p.label} · {p.range}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
            Constructeurs comparés
          </h2>
          <ul className="space-y-1.5">
            {manufacturerAnalyses.map((m) => (
              <li key={m.id} className="text-sm text-dim">{m.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
          Scénarios adaptatifs modélisés
        </h2>
        <div className="flex flex-wrap gap-2">
          {drivingScenarios.map((s) => (
            <span key={s.id} className="rounded-full border border-line px-3 py-1 text-xs text-dim">
              {s.label}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
