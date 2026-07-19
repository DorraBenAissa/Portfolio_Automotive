import { useState } from 'react'
import { Link } from 'react-router-dom'
import { researchPhases, centralStatement } from '../../data/researchPhases'
import { usePageTitle } from '../../hooks/usePageTitle'

const subPages = [
  { to: '/recherche/cadre-theorique', label: 'Cadre théorique', description: 'Simplicité, complexité, simplexité, cognition.' },
  { to: '/recherche/methodologie', label: 'Méthodologie', description: 'Démarche mixte et exploratoire, triangulation.' },
  { to: '/encyclopedie/evolution', label: 'Évolution historique', description: '1898–2026, quatre grandes périodes.' },
  { to: '/recherche/resultats-conducteurs', label: 'Résultats conducteurs', description: 'Questionnaire quantitatif auprès des conducteurs.' },
  { to: '/recherche/experts', label: 'Paroles d’experts', description: 'Entretiens qualitatifs UX / IHM automobile.' },
  { to: '/recherche/discussion', label: 'Discussion', description: 'Confrontation théorie, terrain et experts.' },
  { to: '/recherche/hypotheses', label: 'Hypothèses et validation', description: 'Statut des trois hypothèses du mémoire.' },
]

export function RecherchePage() {
  usePageTitle('Recherche')
  const [active, setActive] = useState(researchPhases[0].id)
  const activePhase = researchPhases.find((p) => p.id === active)!

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Plateforme de recherche</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-3xl">
        Une démarche de recherche en Automotive UX
      </h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300 max-w-2xl">
        Cinq étapes structurent le passage de la théorie à un prototype d’interface adaptative,
        en croisant littérature scientifique, analyse historique, terrain conducteur et expertise professionnelle.
      </p>

      <blockquote className="mt-10 border-l-4 border-stone-900 dark:border-white pl-5 py-1 text-lg sm:text-xl font-medium max-w-3xl">
        « {centralStatement} »
      </blockquote>

      <section className="mt-14" aria-label="Démarche de recherche interactive">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Étapes de la démarche">
          {researchPhases.map((phase, i) => (
            <button
              key={phase.id}
              role="tab"
              aria-selected={active === phase.id}
              onClick={() => setActive(phase.id)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === phase.id
                  ? 'bg-stone-900 text-white border-stone-900 dark:bg-white dark:text-stone-900 dark:border-white'
                  : 'border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-stone-500'
              }`}
            >
              <span className="text-xs opacity-60">{i + 1}</span>
              {phase.name}
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-stone-400" aria-hidden="true">
          {researchPhases.map((p, i) => (
            <span key={p.id} className="flex items-center gap-2">
              <span className={i <= researchPhases.findIndex((x) => x.id === active) ? 'text-stone-900 dark:text-white' : ''}>
                {p.name}
              </span>
              {i < researchPhases.length - 1 && <span>→</span>}
            </span>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
          <h2 className="text-xl font-semibold">{activePhase.name}</h2>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-300 italic">{activePhase.question}</p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {activePhase.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-stone-400 shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-lg font-semibold mb-6">Explorer les pages de recherche</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subPages.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="rounded-xl border border-stone-200 dark:border-stone-800 p-5 hover:border-stone-400 dark:hover:border-stone-600 transition-colors"
            >
              <h3 className="font-medium">{p.label}</h3>
              <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
