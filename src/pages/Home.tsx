import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-4">Automotive UX Research</p>
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight max-w-3xl">
        La simplexité dans les interfaces automobiles
      </h1>
      <p className="mt-6 text-lg text-stone-600 dark:text-stone-300 max-w-2xl">
        Comment organiser la complexité technologique du véhicule pour la rendre compréhensible,
        utilisable et sécurisée pour le conducteur.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/recherche"
          className="rounded-full bg-stone-900 text-white dark:bg-white dark:text-stone-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Explorer la recherche
        </Link>
      </div>
      <p className="mt-16 text-xs text-stone-400">
        Site en cours de construction — les pages sont publiées au fur et à mesure de leur finalisation.
      </p>
    </div>
  )
}
