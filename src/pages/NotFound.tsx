import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFound() {
  usePageTitle('Page introuvable')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-24 sm:py-32">
      <div className="relative overflow-hidden rounded-2xl border border-line p-10 sm:p-16 text-center">
        <div
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-gradient-accent opacity-20 blur-3xl animate-blob"
          aria-hidden="true"
        />
        <p className="relative font-display text-gradient text-6xl sm:text-8xl font-semibold tracking-tight">404</p>
        <h1 className="relative mt-4 font-display text-2xl sm:text-3xl font-semibold tracking-tight">Page introuvable</h1>
        <p className="relative mt-4 text-dim max-w-md mx-auto">
          Cette page n’existe pas ou a été déplacée.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="rounded-full bg-paper text-ink px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity">
            Retour à l’accueil
          </Link>
          <Link to="/recherche" className="rounded-full border border-line-2 px-5 py-2.5 text-sm font-medium hover:border-paper transition-colors">
            Explorer la recherche
          </Link>
        </div>
      </div>
    </div>
  )
}
