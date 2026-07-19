import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { editorialQuotes } from '../data/editorialQuotes'
import { surveyResults } from '../data/surveyResults'
import { manufacturerAnalyses } from '../data/manufacturers'
import { timelinePeriods } from '../data/timeline'
import { Reveal } from '../components/Reveal'

const headlineStat = surveyResults.find((r) => r.id === 'urgence-masquage')!

const quickAudience = [
  { label: 'Résumé', to: '/recherche' },
  { label: 'Chiffres clés', to: '/dashboard-recherche' },
  { label: 'Résultats', to: '/recherche/discussion' },
  { label: 'Prototype', to: '/interface-adaptative/prototype' },
  { label: 'Partenariat', to: '/projet-these/evolution' },
]

const researchAudience = [
  { label: 'Cadre théorique', to: '/recherche/cadre-theorique' },
  { label: 'Méthodologie', to: '/recherche/methodologie' },
  { label: 'Résultats', to: '/recherche/resultats-conducteurs' },
  { label: 'Experts', to: '/recherche/experts' },
  { label: 'Discussion', to: '/recherche/discussion' },
  { label: 'Limites', to: '/interface-adaptative/evaluation' },
  { label: 'Bibliographie', to: '/ethique-et-transparence' },
  { label: 'Projet doctoral', to: '/projet-these/evolution' },
]

export function Home() {
  usePageTitle('Accueil')
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-32 -right-40 h-96 w-96 rounded-full bg-gradient-accent opacity-25 blur-3xl animate-blob"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full bg-gradient-accent opacity-15 blur-3xl animate-blob"
          style={{ animationDelay: '-6s' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-16 animate-fade-in-up">
          <p className="text-sm font-medium text-muted mb-4">Automotive UX Research</p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight max-w-3xl">
            La <span className="text-gradient">simplexité</span> dans les interfaces automobiles
          </h1>
          <p className="mt-6 text-lg text-dim max-w-2xl">
            Comment organiser la complexité technologique du véhicule pour la rendre compréhensible,
            utilisable et sécurisée pour le conducteur — recherche, terrain et prototype d’interface
            adaptative par Dorra Ben Aissa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/recherche"
              className="rounded-full bg-paper text-ink px-5 py-2.5 text-sm font-medium hover:opacity-90 hover:scale-[1.03] transition-transform"
            >
              Explorer la recherche
            </Link>
            <Link
              to="/interface-adaptative/scenarios"
              className="rounded-full border border-line-2 px-5 py-2.5 text-sm font-medium hover:border-paper hover:scale-[1.03] transition-transform"
            >
              Essayer le simulateur
            </Link>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display text-2xl font-semibold">{headlineStat.value}%</p>
              <p className="text-xs text-muted mt-1">masquage souhaité en urgence</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold">{timelinePeriods.length}</p>
              <p className="text-xs text-muted mt-1">périodes historiques (1898–2026)</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold">{manufacturerAnalyses.length}</p>
              <p className="text-xs text-muted mt-1">constructeurs comparés</p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold">7</p>
              <p className="text-xs text-muted mt-1">scénarios adaptatifs modélisés</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <blockquote className="font-display text-xl sm:text-2xl font-medium max-w-3xl">
          « {editorialQuotes[0].text} »
        </blockquote>
        <p className="mt-3 text-sm text-muted">— {editorialQuotes[0].attribution}</p>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid sm:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-line p-6 sm:p-8 hover:border-line-2 transition-colors">
          <p className="text-xs font-medium uppercase tracking-wide text-muted mb-3">
            Pour un recruteur ou un industriel
          </p>
          <h2 className="font-display font-semibold text-lg mb-4">Vue synthétique</h2>
          <ul className="space-y-2">
            {quickAudience.map((a) => (
              <li key={a.to}>
                <Link to={a.to} className="text-sm text-dim hover:text-paper underline decoration-line-2 underline-offset-4">
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-line p-6 sm:p-8 hover:border-line-2 transition-colors">
          <p className="text-xs font-medium uppercase tracking-wide text-muted mb-3">
            Pour un enseignant ou un chercheur
          </p>
          <h2 className="font-display font-semibold text-lg mb-4">Vue recherche</h2>
          <ul className="grid grid-cols-2 gap-2">
            {researchAudience.map((a) => (
              <li key={a.to}>
                <Link to={a.to} className="text-sm text-dim hover:text-paper underline decoration-line-2 underline-offset-4">
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="relative overflow-hidden rounded-2xl border-2 border-paper p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-gradient-accent opacity-20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="font-display font-semibold text-lg">Partenariat et projet doctoral</h2>
            <p className="mt-2 text-sm text-dim max-w-xl">
              Une opportunité de collaboration industrielle (thèse CIFRE) est présentée sur la page
              Projet doctoral — aucun partenariat officiel n’est annoncé à ce stade.
            </p>
          </div>
          <Link
            to="/projet-these/evolution"
            className="relative shrink-0 rounded-full bg-paper text-ink px-5 py-2.5 text-sm font-medium hover:opacity-90 hover:scale-[1.03] transition-transform"
          >
            Voir la proposition →
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
