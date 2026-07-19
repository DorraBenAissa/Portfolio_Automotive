import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useViewMode } from '../context/ViewModeContext'
import { NavDropdown } from './NavDropdown'
import { GlobalSearch } from '../components/GlobalSearch'
import { ReadingProgress } from '../components/ArticleTools'

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

const simpleLinks = [
  { label: 'Projet doctoral', to: '/projet-these/evolution' },
  { label: 'Contributions', to: '/contributions' },
  { label: 'Dashboard', to: '/dashboard-recherche' },
]

const allMobileItems = [
  { label: 'Accueil', to: '/' },
  ...rechercheItems.map((i) => ({ ...i, label: `Recherche · ${i.label}` })),
  ...encyclopedieItems.map((i) => ({ ...i, label: `Encyclopédie · ${i.label}` })),
  ...interfaceAdaptativeItems.map((i) => ({ ...i, label: `Interface adaptative · ${i.label}` })),
  ...simpleLinks,
  { label: 'Éthique et transparence', to: '/ethique-et-transparence' },
]

export function RootLayout() {
  const { mode, setMode } = useViewMode()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <header className="sticky top-0 z-40 border-b border-stone-200 dark:border-stone-800 bg-white/90 dark:bg-stone-950/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16 gap-4">
          <Link to="/" className="font-semibold tracking-tight text-sm sm:text-base whitespace-nowrap">
            Dorra Ben Aissa <span className="text-stone-400 font-normal hidden sm:inline">— Automotive UX Research</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <NavDropdown label="Recherche" items={rechercheItems} />
            <NavDropdown label="Encyclopédie" items={encyclopedieItems} />
            <NavDropdown label="Interface adaptative" items={interfaceAdaptativeItems} />
            {simpleLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `hover:text-stone-900 dark:hover:text-white transition-colors ${
                    isActive ? 'text-stone-900 dark:text-white font-medium' : 'text-stone-500 dark:text-stone-400'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <GlobalSearch />
            <div
              role="group"
              aria-label="Niveau de lecture"
              className="hidden sm:flex items-center rounded-full border border-stone-300 dark:border-stone-700 p-0.5 text-xs shrink-0"
            >
              <button
                type="button"
                onClick={() => setMode('synthetique')}
                aria-pressed={mode === 'synthetique'}
                className={`px-3 py-1 rounded-full transition-colors ${
                  mode === 'synthetique' ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900' : 'text-stone-500'
                }`}
              >
                Synthétique
              </button>
              <button
                type="button"
                onClick={() => setMode('recherche')}
                aria-pressed={mode === 'recherche'}
                className={`px-3 py-1 rounded-full transition-colors ${
                  mode === 'recherche' ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900' : 'text-stone-500'
                }`}
              >
                Recherche
              </button>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden rounded-full border border-stone-300 dark:border-stone-700 h-9 w-9 flex items-center justify-center"
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden border-t border-stone-200 dark:border-stone-800 px-4 sm:px-6 py-4 max-h-[70vh] overflow-y-auto">
            <ul className="space-y-1">
              {allMobileItems.map((i) => (
                <li key={i.to}>
                  <Link
                    to={i.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-stone-600 dark:text-stone-300"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <ReadingProgress />

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-stone-200 dark:border-stone-800 py-10 mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone-500 dark:text-stone-400">
            <Link to="/contributions" className="hover:text-stone-900 dark:hover:text-white">Contributions</Link>
            <Link to="/projet-these/evolution" className="hover:text-stone-900 dark:hover:text-white">Projet doctoral</Link>
            <Link to="/dashboard-recherche" className="hover:text-stone-900 dark:hover:text-white">Dashboard</Link>
            <Link to="/ethique-et-transparence" className="hover:text-stone-900 dark:hover:text-white">Éthique et transparence</Link>
          </div>
          <div className="mt-6 text-xs text-stone-500 dark:text-stone-400 flex flex-col sm:flex-row justify-between gap-2">
            <p>Recherche, analyse et conception : Dorra Ben Aissa · Mémoire de Master 2, 2026</p>
            <p>Aucune affiliation officielle avec les marques ou entreprises mentionnées.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
