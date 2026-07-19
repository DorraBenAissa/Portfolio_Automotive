import { Link } from 'react-router-dom'
import { usePageTitle } from '../../hooks/usePageTitle'

export function ProjetTheseEvolution() {
  usePageTitle('Projet doctoral')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-24 sm:py-32">
      <div className="relative overflow-hidden rounded-2xl border border-line p-10 sm:p-16 text-center">
        <div
          className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-gradient-accent opacity-20 blur-3xl animate-blob"
          aria-hidden="true"
        />
        <p className="relative text-sm font-medium text-muted mb-3">Projet doctoral</p>
        <h1 className="relative font-display text-3xl sm:text-4xl font-semibold tracking-tight">
          Du mémoire à la thèse
        </h1>
        <p className="relative mt-4 text-dim">En cours de préparation.</p>
        <Link to="/" className="relative mt-8 inline-block rounded-full border border-line-2 px-5 py-2.5 text-sm font-medium hover:border-paper transition-colors">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  )
}
