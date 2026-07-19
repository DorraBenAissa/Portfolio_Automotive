import { experts } from '../../data/experts'
import { expertThemes, expertMatrix } from '../../data/expertThemes'
import { DataStatusBadge } from '../../components/StatusBadge'
import { usePageTitle } from '../../hooks/usePageTitle'

export function Experts() {
  usePageTitle('Paroles d’experts')
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Recherche / Paroles d’experts</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Paroles d’experts</h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300 max-w-2xl">
        Des entretiens qualitatifs ont été menés auprès de spécialistes du design d’interaction, de l’UX
        et de l’IHM automobile. Seuls les contenus vérifiés et autorisés sont publiés.
      </p>

      <div className="mt-6 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 p-4 text-sm text-amber-900 dark:text-amber-200">
        Aucune citation directe n’est inventée : les entretiens de ce mémoire sont en cours d’intégration et
        de vérification. Les profils s’affichent sous forme anonymisée (« Expert A », « Expert B »…) tant que
        l’autorisation de publication n’est pas confirmée.
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-semibold mb-6">Profils des experts</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {experts.map((e) => (
            <div key={e.id} className="rounded-2xl border border-stone-200 dark:border-stone-800 p-5">
              <div className="h-12 w-12 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-sm font-medium mb-3">
                {e.displayLabel.split(' ').pop()}
              </div>
              <h3 className="font-medium">{e.identityVisibility === 'public' && e.name ? e.name : e.displayLabel}</h3>
              <p className="text-sm text-stone-500 dark:text-stone-400">{e.role ?? 'Rôle à confirmer'}</p>
              <p className="text-xs text-stone-400 mt-1">{e.domain}</p>
              <div className="mt-3">
                <DataStatusBadge status={e.status} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Thèmes des discussions</h2>
        <div className="space-y-8">
          {expertThemes.map((t) => (
            <article key={t.theme} className="rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
              <h3 className="font-semibold text-lg">{t.theme}</h3>

              {t.questions.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {t.questions.map((q) => (
                    <li key={q} className="text-sm italic text-stone-600 dark:text-stone-400">« {q} »</li>
                  ))}
                </ul>
              )}

              {t.synthesis && (
                <div className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-1">
                    Synthèse (reformulation de Dorra Ben Aissa)
                  </p>
                  <p className="text-sm text-stone-700 dark:text-stone-300">{t.synthesis}</p>
                </div>
              )}

              {t.points.length > 0 && (
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-stone-400 shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-2">Matrice de synthèse des experts</h2>
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
          Structure prête pour intégration — aucune opinion n’est inventée, toutes les cellules restent en
          brouillon jusqu’à vérification depuis le mémoire.
        </p>
        <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800">
          <table className="w-full text-sm">
            <thead className="bg-stone-50 dark:bg-stone-900 text-left">
              <tr>
                {['Thème', 'Expert A', 'Expert B', 'Expert C', 'Convergence', 'Divergence', 'Implication UX'].map((h) => (
                  <th key={h} className="px-4 py-2.5 font-medium whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {expertMatrix.map((row) => (
                <tr key={row.theme} className="border-t border-stone-200 dark:border-stone-800">
                  <td className="px-4 py-2.5 font-medium whitespace-nowrap">{row.theme}</td>
                  <td className="px-4 py-2.5 text-stone-400 italic">{row.expertA}</td>
                  <td className="px-4 py-2.5 text-stone-400 italic">{row.expertB}</td>
                  <td className="px-4 py-2.5 text-stone-400 italic">{row.expertC}</td>
                  <td className="px-4 py-2.5 text-stone-400 italic">{row.convergence}</td>
                  <td className="px-4 py-2.5 text-stone-400 italic">{row.divergence}</td>
                  <td className="px-4 py-2.5 text-stone-400 italic">{row.uxImplication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
