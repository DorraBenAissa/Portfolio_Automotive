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
    <div className="min-h-screen flex flex-col bg-ink text-paper">
      <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex items-center gap-2.5 font-display font-semibold tracking-tight text-sm sm:text-base whitespace-nowrap">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-accent animate-gradient shrink-0" aria-hidden="true" />
            Dorra Ben Aissa <span className="text-muted font-normal hidden sm:inline">— Automotive UX Research</span>
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
                  `relative pb-1 hover:text-paper transition-colors ${
                    isActive ? 'text-paper font-medium' : 'text-muted'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-accent" aria-hidden="true" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <GlobalSearch />
            <div
              role="group"
              aria-label="Niveau de lecture"
              className="hidden sm:flex items-center rounded-full border border-line-2 p-0.5 text-xs shrink-0"
            >
              <button
                type="button"
                onClick={() => setMode('synthetique')}
                aria-pressed={mode === 'synthetique'}
                className={`px-3 py-1 rounded-full transition-colors ${
                  mode === 'synthetique' ? 'bg-paper text-ink' : 'text-muted'
                }`}
              >
                Synthétique
              </button>
              <button
                type="button"
                onClick={() => setMode('recherche')}
                aria-pressed={mode === 'recherche'}
                className={`px-3 py-1 rounded-full transition-colors ${
                  mode === 'recherche' ? 'bg-paper text-ink' : 'text-muted'
                }`}
              >
                Recherche
              </button>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden rounded-full border border-line-2 h-9 w-9 flex items-center justify-center"
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden border-t border-line px-4 sm:px-6 py-4 max-h-[70vh] overflow-y-auto animate-pop">
            <ul className="space-y-1">
              {allMobileItems.map((i) => (
                <li key={i.to}>
                  <Link
                    to={i.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-dim"
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

      <footer className="pt-10 pb-10 mt-16">
        <div className="h-px bg-gradient-accent opacity-40" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            <Link to="/contributions" className="hover:text-paper">Contributions</Link>
            <Link to="/projet-these/evolution" className="hover:text-paper">Projet doctoral</Link>
            <Link to="/dashboard-recherche" className="hover:text-paper">Dashboard</Link>
            <Link to="/ethique-et-transparence" className="hover:text-paper">Éthique et transparence</Link>
          </div>
          <div className="mt-6 text-xs text-muted flex flex-col sm:flex-row justify-between gap-2">
            <p>Recherche, analyse et conception : Dorra Ben Aissa · Mémoire de Master 2, 2026</p>
            <p>Aucune affiliation officielle avec les marques ou entreprises mentionnées.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
