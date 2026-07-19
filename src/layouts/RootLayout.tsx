import { Link, Outlet } from 'react-router-dom'
import { useViewMode } from '../context/ViewModeContext'
import { NavDropdown } from './NavDropdown'

const rechercheItems = [
  { label: 'Vue d’ensemble', to: '/recherche' },
  { label: 'Cadre théorique', to: '/recherche/cadre-theorique' },
  { label: 'Méthodologie', to: '/recherche/methodologie' },
  { label: 'Résultats conducteurs', to: '/recherche/resultats-conducteurs' },
  { label: 'Paroles d’experts', to: '/recherche/experts' },
  { label: 'Discussion', to: '/recherche/discussion' },
  { label: 'Hypothèses et validation', to: '/recherche/hypotheses' },
]

const encyclopedieItems = [
  { label: 'Évolution historique', to: '/encyclopedie/evolution' },
  { label: 'Comparaison constructeurs', to: '/encyclopedie/comparaison' },
]

const interfaceAdaptativeItems = [
  { label: 'Principes de conception', to: '/interface-adaptative/principes' },
  { label: 'Référentiel des commandes', to: '/interface-adaptative/commandes' },
  { label: 'Scénarios adaptatifs', to: '/interface-adaptative/scenarios' },
  { label: 'Personas', to: '/interface-adaptative/personas' },
  { label: 'Prototype', to: '/interface-adaptative/prototype' },
  { label: 'Évaluation critique', to: '/interface-adaptative/evaluation' },
]

export function RootLayout() {
  const { mode, setMode } = useViewMode()

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <header className="sticky top-0 z-40 border-b border-stone-200 dark:border-stone-800 bg-white/90 dark:bg-stone-950/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16 gap-4">
          <Link to="/" className="font-semibold tracking-tight text-sm sm:text-base whitespace-nowrap">
            Dorra Ben Aissa <span className="text-stone-400 font-normal">— Automotive UX Research</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavDropdown label="Recherche" items={rechercheItems} />
            <NavDropdown label="Encyclopédie" items={encyclopedieItems} />
            <NavDropdown label="Interface adaptative" items={interfaceAdaptativeItems} />
          </nav>
          <div
            role="group"
            aria-label="Niveau de lecture"
            className="flex items-center rounded-full border border-stone-300 dark:border-stone-700 p-0.5 text-xs shrink-0"
          >
            <button
              type="button"
              onClick={() => setMode('synthetique')}
              aria-pressed={mode === 'synthetique'}
              className={`px-3 py-1 rounded-full transition-colors ${
                mode === 'synthetique' ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900' : 'text-stone-500'
              }`}
            >
              Vue synthétique
            </button>
            <button
              type="button"
              onClick={() => setMode('recherche')}
              aria-pressed={mode === 'recherche'}
              className={`px-3 py-1 rounded-full transition-colors ${
                mode === 'recherche' ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900' : 'text-stone-500'
              }`}
            >
              Vue recherche
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-stone-200 dark:border-stone-800 py-8 mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-xs text-stone-500 dark:text-stone-400 flex flex-col sm:flex-row justify-between gap-2">
          <p>Recherche, analyse et conception : Dorra Ben Aissa · Mémoire de Master 2, 2026</p>
          <p>Aucune affiliation officielle avec les marques ou entreprises mentionnées.</p>
        </div>
      </footer>
    </div>
  )
}
