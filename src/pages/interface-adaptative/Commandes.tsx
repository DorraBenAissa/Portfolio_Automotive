import { useState } from 'react'
import { criticalityLevels, vehicleCommands, humanMachineSoftwareAiMatrix, humanMachinePrinciple } from '../../data/commands'
import type { CriticalityLevel } from '../../types/command'

const matrixGroups: { key: keyof typeof humanMachineSoftwareAiMatrix; title: string }[] = [
  { key: 'conducteur', title: 'Conducteur' },
  { key: 'vehicule', title: 'Véhicule' },
  { key: 'logiciels', title: 'Logiciels embarqués' },
  { key: 'ia', title: 'Intelligence artificielle' },
]

export function Commandes() {
  const [filter, setFilter] = useState<CriticalityLevel | 'all'>('all')
  const filtered = filter === 'all' ? vehicleCommands : vehicleCommands.filter((c) => c.criticality === filter)

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Interface adaptative / Commandes</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Référentiel des commandes</h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300 max-w-2xl">
        Chaque commande du véhicule est classée selon son niveau de criticité, ce qui détermine sa modalité
        d’interaction recommandée : physique, semi-physique ou tactile.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`rounded-full border px-4 py-2 text-sm font-medium ${filter === 'all' ? 'bg-stone-900 text-white border-stone-900 dark:bg-white dark:text-stone-900' : 'border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300'}`}
        >
          Toutes
        </button>
        {criticalityLevels.map((lvl) => (
          <button
            key={lvl.level}
            onClick={() => setFilter(lvl.level)}
            className={`rounded-full border px-4 py-2 text-sm font-medium ${filter === lvl.level ? 'bg-stone-900 text-white border-stone-900 dark:bg-white dark:text-stone-900' : 'border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300'}`}
          >
            Niveau {lvl.level}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-1">
        {criticalityLevels
          .filter((l) => filter === 'all' || l.level === filter)
          .map((lvl) => (
            <div key={lvl.level} className="rounded-lg bg-stone-50 dark:bg-stone-900 px-4 py-2 text-xs text-stone-500 dark:text-stone-400">
              <span className="font-medium text-stone-700 dark:text-stone-300">{lvl.title}</span>
              {lvl.justifications.length > 0 && ` — ${lvl.justifications.join(', ')}`}
            </div>
          ))}
      </div>

      <div className="mt-6 overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 dark:bg-stone-900 text-left">
            <tr>
              {['Commande', 'Catégorie', 'Modalité', 'Sans regard', 'Fréquence', 'Automatisable', 'Validation humaine'].map((h) => (
                <th key={h} className="px-4 py-2.5 font-medium whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t border-stone-200 dark:border-stone-800">
                <td className="px-4 py-2.5 font-medium whitespace-nowrap">{c.name}</td>
                <td className="px-4 py-2.5 text-stone-500">{c.category}</td>
                <td className="px-4 py-2.5 text-stone-500">{c.recommendedModality}</td>
                <td className="px-4 py-2.5">{c.eyesFree ? '✓' : '—'}</td>
                <td className="px-4 py-2.5 text-stone-500 whitespace-nowrap">{c.frequency}</td>
                <td className="px-4 py-2.5">{c.automatable ? '✓' : '—'}</td>
                <td className="px-4 py-2.5">{c.requiresHumanValidation ? '✓' : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-16">
        <h2 className="text-lg font-semibold mb-6">Matrice humain–machine–logiciel–IA</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {matrixGroups.map((g) => (
            <div key={g.key} className="rounded-2xl border border-stone-200 dark:border-stone-800 p-5">
              <h3 className="font-medium mb-3">{g.title}</h3>
              <ul className="space-y-1.5">
                {humanMachineSoftwareAiMatrix[g.key].map((item) => (
                  <li key={item} className="text-sm text-stone-600 dark:text-stone-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border-2 border-stone-900 dark:border-white p-5 text-center">
          <p className="font-medium">« {humanMachinePrinciple} »</p>
        </div>
      </section>
    </div>
  )
}
