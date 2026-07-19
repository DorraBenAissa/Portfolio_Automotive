import { useState } from 'react'
import { personas } from '../../data/personas'
import { usePageTitle } from '../../hooks/usePageTitle'

export function Personas() {
  usePageTitle('Personas')
  const [openId, setOpenId] = useState<string | null>(personas[0]?.id ?? null)

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Interface adaptative / Personas</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Personas</h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300 max-w-2xl">
        Ces personas illustrent la diversité des conducteurs visée par les principes de conception.
      </p>

      <div className="mt-4 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 p-4 text-sm text-amber-900 dark:text-amber-200">
        Ces huit personas sont des extensions de démonstration construites pour ce portfolio ; ils ne
        représentent pas des participants réels du questionnaire ou des entretiens du mémoire.
      </div>

      <div className="mt-10 space-y-3">
        {personas.map((p) => {
          const open = openId === p.id
          return (
            <article key={p.id} className="rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden">
              <button
                onClick={() => setOpenId(open ? null : p.id)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={open}
              >
                <div>
                  <h2 className="font-semibold">{p.name}</h2>
                  <p className="text-sm text-stone-500 dark:text-stone-400">{p.profile}</p>
                </div>
                <span className="text-xs rounded-full border border-stone-300 dark:border-stone-700 px-2.5 py-1 shrink-0">
                  {p.origin === 'mémoire' ? 'Issu du mémoire' : 'Extension démonstration'}
                </span>
              </button>
              {open && (
                <div className="px-5 pb-6 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  <div><p className="font-medium text-stone-500 dark:text-stone-400 mb-1">Expérience</p><p className="text-stone-700 dark:text-stone-300">{p.experience}</p></div>
                  <div><p className="font-medium text-stone-500 dark:text-stone-400 mb-1">Contexte</p><p className="text-stone-700 dark:text-stone-300">{p.context}</p></div>
                  <div><p className="font-medium text-stone-500 dark:text-stone-400 mb-1">Objectifs</p><p className="text-stone-700 dark:text-stone-300">{p.goals.join(', ')}</p></div>
                  <div><p className="font-medium text-stone-500 dark:text-stone-400 mb-1">Difficultés</p><p className="text-stone-700 dark:text-stone-300">{p.difficulties.join(', ')}</p></div>
                  <div><p className="font-medium text-stone-500 dark:text-stone-400 mb-1">Rapport à la technologie</p><p className="text-stone-700 dark:text-stone-300">{p.techRelationship}</p></div>
                  <div><p className="font-medium text-stone-500 dark:text-stone-400 mb-1">Besoins</p><p className="text-stone-700 dark:text-stone-300">{p.needs.join(', ')}</p></div>
                  <div><p className="font-medium text-stone-500 dark:text-stone-400 mb-1">Risques</p><p className="text-stone-700 dark:text-stone-300">{p.risks.join(', ')}</p></div>
                  <div><p className="font-medium text-stone-500 dark:text-stone-400 mb-1">Attentes</p><p className="text-stone-700 dark:text-stone-300">{p.expectations.join(', ')}</p></div>
                  <div className="sm:col-span-2"><p className="font-medium text-stone-500 dark:text-stone-400 mb-1">Scénario</p><p className="text-stone-700 dark:text-stone-300">{p.scenario}</p></div>
                  <div className="sm:col-span-2 pt-3 border-t border-dashed border-stone-300 dark:border-stone-700">
                    <p className="font-medium text-stone-500 dark:text-stone-400 mb-1">Recommandations d’interface</p>
                    <p className="text-stone-700 dark:text-stone-300">{p.recommendations.join(', ')}</p>
                  </div>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}
