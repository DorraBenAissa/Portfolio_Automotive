import { Link } from 'react-router-dom'
import { prototypeArchitectureLayers, prototypeScreens } from '../../data/prototype'
import { usePageTitle } from '../../hooks/usePageTitle'

export function Prototype() {
  usePageTitle('Prototype')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Interface adaptative / Prototype</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Prototype</h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300 max-w-2xl">
        Le prototype traduit les principes de conception et les scénarios adaptatifs en une architecture
        d’interface concrète, démontrable directement dans le navigateur.
      </p>

      <div className="mt-8 rounded-2xl border-2 border-stone-900 dark:border-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-semibold">Mode démonstration interactif</h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
            Manipulez le contexte de conduite et observez l’interface se réorganiser en temps réel.
          </p>
        </div>
        <Link
          to="/interface-adaptative/scenarios"
          className="shrink-0 rounded-full bg-stone-900 text-white dark:bg-white dark:text-stone-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Lancer le simulateur →
        </Link>
      </div>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Architecture du concept</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {prototypeArchitectureLayers.map((l) => (
            <div key={l.id} className="rounded-xl border border-stone-200 dark:border-stone-800 p-5">
              <h3 className="font-medium mb-1">{l.title}</h3>
              <p className="text-sm text-stone-600 dark:text-stone-300">{l.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Écrans du prototype</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {prototypeScreens.map((s) => (
            <div
              key={s.id}
              className="aspect-video rounded-xl border-2 border-dashed border-stone-300 dark:border-stone-700 flex items-center justify-center text-sm text-stone-400"
            >
              {s.label} — capture à intégrer
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-stone-400">
          Emplacement réservé pour l’intégration ultérieure d’un prototype Figma, d’une vidéo ou de captures d’écran.
        </p>
      </section>
    </div>
  )
}
