import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useViewMode } from '../context/ViewModeContext'
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

const desktopNavItems = [
  { label: 'Recherche', to: '/recherche' },
  { label: 'Encyclopédie', to: '/encyclopedie/evolution' },
  { label: 'Interface adaptative', to: '/interface-adaptative/principes' },
]

interface MenuSection {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

const menuSections: MenuSection[] = [
  { label: 'Accueil', to: '/' },
  { label: 'Recherche', to: '/recherche', children: rechercheItems },
  { label: 'Encyclopédie', to: '/encyclopedie/evolution', children: encyclopedieItems },
  { label: 'Interface adaptative', to: '/interface-adaptative/principes', children: interfaceAdaptativeItems },
  ...simpleLinks,
  { label: 'Éthique et transparence', to: '/ethique-et-transparence' },
]

export function RootLayout() {
  const { mode, setMode } = useViewMode()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null)
  const hasOpenedMenu = useRef(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    if (menuOpen) {
      hasOpenedMenu.current = true
      firstMenuLinkRef.current?.focus()
    } else if (hasOpenedMenu.current) {
      menuButtonRef.current?.focus()
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <div className="min-h-screen flex flex-col bg-ink text-paper">
      <header className="sticky top-0 z-50 px-4 sm:px-6 pt-4">
        <div className="mx-auto max-w-6xl rounded-full border border-line-2 bg-ink/40 backdrop-blur-3xl px-5 sm:px-8 flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex items-center gap-2.5 font-display font-semibold tracking-tight text-sm sm:text-base whitespace-nowrap">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-accent animate-gradient shrink-0" aria-hidden="true" />
            Dorra Ben Aissa <span className="text-muted font-normal hidden sm:inline">— Automotive UX Research</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 text-sm">
            {desktopNavItems.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `link-underline whitespace-nowrap ${isActive ? 'is-active text-paper font-medium' : 'text-muted hover:text-paper'}`
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
            <div className="h-5 w-px bg-line-2 hidden sm:block" aria-hidden="true" />
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              className="link-underline text-sm font-medium lg:hidden"
            >
              {menuOpen ? 'fermer' : 'menu'}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="fixed inset-0 z-40 bg-ink overflow-y-auto animate-fade-in-up lg:hidden"
        >
          <div
            className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-gradient-accent opacity-15 blur-3xl animate-blob"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-16">
            <nav className="flex flex-col">
              {menuSections.map((s, i) => (
                <div key={s.to} className="border-b border-line py-5 sm:py-6">
                  <Link
                    ref={i === 0 ? firstMenuLinkRef : undefined}
                    to={s.to}
                    onClick={() => setMenuOpen(false)}
                    className={`link-underline font-display text-3xl sm:text-5xl font-semibold tracking-tight ${
                      location.pathname === s.to ? 'is-active text-gradient' : ''
                    }`}
                  >
                    {s.label}
                  </Link>
                  {s.children && (
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      {s.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setMenuOpen(false)}
                          className="link-underline text-sm text-muted hover:text-paper"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
      <ReadingProgress />

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="relative mt-24 overflow-hidden">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-gradient-accent opacity-15 blur-3xl animate-blob"
          aria-hidden="true"
        />

        <div className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight max-w-md">
              On travaille <span className="text-gradient">la suite</span> ?
            </h2>
            <Link
              to="/projet-these/evolution"
              className="group relative shrink-0 rounded-full px-8 py-4 text-sm font-medium border border-line-2 hover:border-paper transition-colors"
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-25 blur-xl transition-opacity"
                aria-hidden="true"
              />
              <span className="relative">Voir le projet doctoral →</span>
            </Link>
          </div>
        </div>

        <div className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-2 font-display font-semibold tracking-tight text-sm w-fit whitespace-nowrap shrink-0">
              <span className="h-2 w-2 rounded-full bg-gradient-accent animate-gradient shrink-0" aria-hidden="true" />
              Dorra Ben Aissa <span className="text-muted font-normal">— Automotive UX Research</span>
            </Link>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <Link to="/" className="link-underline hover:text-paper">Accueil</Link>
              <Link to="/recherche" className="link-underline hover:text-paper">Recherche</Link>
              <Link to="/encyclopedie/evolution" className="link-underline hover:text-paper">Encyclopédie</Link>
              <Link to="/interface-adaptative/principes" className="link-underline hover:text-paper">Interface adaptative</Link>
              <Link to="/projet-these/evolution" className="link-underline hover:text-paper">Projet doctoral</Link>
              <Link to="/contributions" className="link-underline hover:text-paper">Contributions</Link>
              <Link to="/dashboard-recherche" className="link-underline hover:text-paper">Dashboard</Link>
              <Link to="/ethique-et-transparence" className="link-underline hover:text-paper">Éthique et transparence</Link>
            </nav>
          </div>
        </div>

        <div className="relative border-t border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-xs text-muted flex flex-col sm:flex-row justify-between gap-2">
            <p>Recherche, analyse et conception : Dorra Ben Aissa · Mémoire de Master 2, 2026 — Université Sorbonne Paris Nord</p>
            <p>Aucune affiliation officielle avec les marques ou entreprises mentionnées.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
