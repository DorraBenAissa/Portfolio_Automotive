import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { editorialQuotes } from '../data/editorialQuotes'
import { surveyResults } from '../data/surveyResults'
import { manufacturerAnalyses } from '../data/manufacturers'
import { timelinePeriods } from '../data/timeline'

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
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-16">
        <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-4">Automotive UX Research</p>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
          La simplexité dans les interfaces automobiles
        </h1>
        <p className="mt-6 text-lg text-stone-600 dark:text-stone-300 max-w-2xl">
          Comment organiser la complexité technologique du véhicule pour la rendre compréhensible,
          utilisable et sécurisée pour le conducteur — recherche, terrain et prototype d’interface
          adaptative par Dorra Ben Aissa.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/recherche"
            className="rounded-full bg-stone-900 text-white dark:bg-white dark:text-stone-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Explorer la recherche
          </Link>
          <Link
            to="/interface-adaptative/scenarios"
            className="rounded-full border border-stone-300 dark:border-stone-700 px-5 py-2.5 text-sm font-medium hover:border-stone-500"
          >
            Essayer le simulateur
          </Link>
        </div>
      </section>

      <section className="border-y border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl font-semibold">{headlineStat.value}%</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">masquage souhaité en urgence</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">{timelinePeriods.length}</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">périodes historiques (1898–2026)</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">{manufacturerAnalyses.length}</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">constructeurs comparés</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">7</p>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">scénarios adaptatifs modélisés</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <blockquote className="text-xl sm:text-2xl font-medium max-w-3xl">
          « {editorialQuotes[0].text} »
        </blockquote>
        <p className="mt-3 text-sm text-stone-500">— {editorialQuotes[0].attribution}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid sm:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-3">
            Pour un recruteur ou un industriel
          </p>
          <h2 className="font-semibold text-lg mb-4">Vue synthétique</h2>
          <ul className="space-y-2">
            {quickAudience.map((a) => (
              <li key={a.to}>
                <Link to={a.to} className="text-sm text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white underline decoration-stone-300 underline-offset-4">
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-3">
            Pour un enseignant ou un chercheur
          </p>
          <h2 className="font-semibold text-lg mb-4">Vue recherche</h2>
          <ul className="grid grid-cols-2 gap-2">
            {researchAudience.map((a) => (
              <li key={a.to}>
                <Link to={a.to} className="text-sm text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white underline decoration-stone-300 underline-offset-4">
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="rounded-2xl border-2 border-stone-900 dark:border-white p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-semibold text-lg">Partenariat et projet doctoral</h2>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-300 max-w-xl">
              Une opportunité de collaboration industrielle (thèse CIFRE) est présentée sur la page
              Projet doctoral — aucun partenariat officiel n’est annoncé à ce stade.
            </p>
          </div>
          <Link
            to="/projet-these/evolution"
            className="shrink-0 rounded-full bg-stone-900 text-white dark:bg-white dark:text-stone-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Voir la proposition →
          </Link>
        </div>
      </section>
    </div>
  )
}
